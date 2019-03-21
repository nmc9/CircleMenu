<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    //wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . "/style.css");
}

// for cms shortcode
include_once('inc/shortcode.php');


//  For widget
function responsive_widgets_init() {
  register_sidebar(array(
    'name' => __('Footer Menu Widget', 'responsive'),
    'description' => __('Footer Menu Widget', 'responsive'),
    'id' => 'footer-menu-sidebar',
    'before_title' => '<h4>',
    'after_title' => '</h4>',
    'before_widget' => '<div class="col-md-3 col-sm-12 footer_sec2"><div class="hp_link">',
    'after_widget' => '</div></div>'
  ));  
  register_sidebar(array(
    'name' => __('Company page Widget', 'responsive'),
    'description' => __('Company page Widget', 'responsive'),
    'id' => 'company-page-sidebar',
    'before_title' => '<h4>',
    'after_title' => '</h4>',
    'before_widget' => '',
    'after_widget' => ''
  ));  
}
add_action('widgets_init', 'responsive_widgets_init');
add_action( 'init', 'responsive_widgets_init' );

// Feature image
add_theme_support('post-thumbnails');

// Enable title tag
add_theme_support( 'title-tag' );

// option page for Globa Settings
add_action('acf/init', 'my_acf_init');
function my_acf_init() { 
  if( function_exists('acf_add_options_page') ) {  
    $option_page = acf_add_options_page(array(
     'page_title'  => __('Global Settings', 'my_text_domain'),
     'menu_title'  => __('Global Settings', 'my_text_domain'),
     'menu_slug'  => 'acf_ptions-globa_sattings'
    ));  
  } 
}

// For multiple menu  
function register_my_menus() {
  register_nav_menus(
    array(
      'footer' => __( 'Footer menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );


function excerpt($limit = 60) {
  $excerpt = explode(' ', get_the_excerpt(), $limit);
  if (count($excerpt)>=$limit) {
    array_pop($excerpt);
    $excerpt = implode(" ",$excerpt).'...';
  } else {
    $excerpt = implode(" ",$excerpt);
  } 
  $excerpt = preg_replace('`[[^]]*]`','',$excerpt);
  return $excerpt;
}


function my_login_logo() { 

  $custom_logo_id = get_theme_mod( 'custom_logo' );
  $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
?>
    <style type="text/css">
        #login h1 a, .login h1 a { background-image: url('<?php echo($image[0]!='' ? $image[0] : esc_url( get_stylesheet_directory_uri() ).'/assets/images/logo.jpg'); ?>'); width: 211px; height: 62px; max-width: 100%; background-size: 211px 62px; background-repeat: no-repeat; background-color: #504F4F;}
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );


//hook into the administrative header output
function wpb_custom_logo() {

  echo '<style type="text/css">
  #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon:before {
  background: url('.esc_url( get_stylesheet_directory_uri() ).'/assets/images/admin-icon.png) no-repeat !important;
  background-position: 0 0;
  color:rgba(0, 0, 0, 0);
  }
  #wpadminbar #wp-admin-bar-wp-logo.hover > .ab-item .ab-icon {
  background-position: 0 0;
  }
  </style>';
  
  //$favicon_path = plugins_url( '/favicon.ico', __FILE__ );
}
add_action('wp_before_admin_bar_render', 'wpb_custom_logo');

// add devolopment in admin
/*function remove_footer_admin () 
{
    echo '<span id="footer-thankyou">Website by <a href="http://www.timefortheweb.com" target="_blank">Timefortheweb</a></span>';
}
add_filter('admin_footer_text', 'remove_footer_admin');*/
