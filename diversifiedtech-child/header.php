<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="//gmpg.org/xfn/11">
  <?php wp_head(); ?>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/css/bootstrap.css" type="text/css" rel="stylesheet" media="all">
  <link href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/css/custom.css" type="text/css" rel="stylesheet" media="all">
  <link href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/css/responsive.css" type="text/css" rel="stylesheet" media="all">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" media="screen" href="//fontlibrary.org/face/tex-gyre-adventor" type="text/css" />
  <link href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/css/app.css" type="text/css" rel="stylesheet" media="all">



  <script src="<?php echo esc_url(get_stylesheet_directory_uri()); ?>/assets/js/jquery.min.js"></script>
  <script src="//npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
  <script src="<?php echo esc_url(get_stylesheet_directory_uri()); ?>/assets/js/bootstrap.js"></script>

</head>
<body <?php body_class('site_hp'); ?>>

  <!-- top header -->
  <div class="header-top">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <ul class="top-head">
            <?php
            echo(get_field('header_text', 'option') ? '<li><p class="d-inline text-white">'.get_field('header_text', 'option').'</p></li>' : '');
            echo(get_field('header_email', 'option') ? '<li><a href="mailto:'.get_field('header_email', 'option').'" class="text-white"><i class="fa fa-envelope-o" aria-hidden="true"></i>'.get_field('header_email', 'option').'</a></li>' : '');
            echo(get_field('header_phone', 'option') ? '<li><a href="mobto:'.get_field('header_phone', 'option').'" class="text-white"><i class="fa fa-phone" aria-hidden="true"></i>'.get_field('header_phone', 'option').'</a></li>' : '');
            ?>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- //top header -->

  <!-- bottom header -->
  <div class="header-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="logo_section">
            <?php
            $custom_logo_id = get_theme_mod( 'custom_logo' );
            $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
            if($image[0]!=''):
              echo '<a href="'.home_url( '/' ).'" title="'.esc_attr( get_bloginfo( 'name', 'display' ) ).'"><img src="'.$image[0].'" alt="Claude logo"></a>';
            else:
              echo '<a href="'.home_url( '/' ).'" title="'.esc_attr( get_bloginfo( 'name', 'display' ) ).'"><img src="'.esc_url( get_stylesheet_directory_uri() ).'/assets/images/logo.jpg" alt="Logo"></a>';
            endif;
            ?>
          </div>
        </div>
        <?php if ( has_nav_menu( 'top' ) ) : ?>
          <div class="col-md-9 col-sm-12">
            <div class="menu_section">
              <?php get_template_part('template-parts/navigation/navigation', 'top'); ?>
            </div>

            <!-- mob menu start-->
            <div class="mob_header">
              <div class="menu_btn_open">
                <i class="fa fa-bars menu_open"></i>
              </div>
              <div class="topnav mob_menu" >
                <div class="menu_btn_close">
                  <i class="fa fa-times menu_close" aria-hidden="true"></i>
                </div>
                <?php get_template_part('template-parts/navigation/navigation', 'top'); ?>
              </div>
            </div>
            <!--- mob menu end -->

          </div>
        <?php endif; ?>

      </div>
    </div>
  </div>
  <!-- //bottom header -->

  <!-- banner section -->
  <?php
  $bannerImage = get_field('banner_image');
  if(false && $bannerImage):
    ?>

    <section class="<?php echo(is_front_page()?'banner_section':'pricing_banner_section');?>" style="background:url(<?php echo($bannerImage['url']?$bannerImage['url']: esc_url( get_stylesheet_directory_uri() ).'/assets/images/platform_banner.png');?>) no-repeat top / cover;">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <?php
            if(get_field('banner-heading') || get_field('banner-content')):
              echo '<div class="banner-text-sec">';
            echo(get_field('banner-heading') ? '<h2>'.get_field('banner-heading').'</h2>':'');
            echo(get_field('banner-content') ? '<p>'.nl2br(get_field('banner-content')).'</p>':'');
            echo '</div>';
          endif;
          if(get_field('banner-button')):
            echo '<div class="btn_sec">';
            echo(get_field('button-link')?'<a href="'.get_field('button-link').'">'.get_field('banner-button').'</a>':'<a href="#">'.get_field('banner-button').'</a>');
            echo '</div>';
          endif;
          ?>
        </div>
      </div>
    </div>

  </section>
<?php endif; ?>
<!-- //banner section -->
<!-- circle menu section -->
<section class="circle_menu_section">
	<div id="wheelContainer">
		<div id="wheelDiv" class="centerme">
		</div>

		<div id="CenterDiv" class="centerme">
			<svg id="centerSVG">
			</svg>
		</div>

		<div id="BehindDiv" class="centerme">
			<svg id="behindSVG"></svg>
		</div>
	</div>
</section>
<!-- //circle menu section -->
