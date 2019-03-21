<?php
// create shortcode home Courses
add_shortcode( 'home-product-cat-list', 'home_product_cat_list' );
function home_product_cat_list( $atts, $content = null ) {
  
  $taxonomia = array( 'product_cat' );
  $args = array(
    //'orderby'           => 'name', 
    //'order'             => 'ASC',
    'hide_empty'        => false,
    'exclude'           => array(15), 
    'parent'            => 0,
    'hierarchical'      => false, 
    //'child_of'          => 0,
    'number'            => 2, 
    'childless'         => false
  ); 

  $terms = get_terms($taxonomia, $args);
  $catData = '';
  if($terms){
    foreach ($terms as $key => $value){

      $thumbnail_id = get_woocommerce_term_meta( $value->term_id, 'thumbnail_id', true ); 
      $image = wp_get_attachment_url( $thumbnail_id );

      $term_link = get_term_link( $value );
  
      $catData .= "<span class=\"item\">
        <div class=\"collections-box\">
          <div class=\"clb01\"> <img src='{$image}' alt=\"{$value->name}\" class=\"image\" />
            <h5><a href={$term_link} class=\"shopnow\">$value->name</a></h5>
          </div>
        </div>
      </span>";
    }
  }
  return $catData;
}

// create shortcode WSTA Committees List
add_shortcode( 'committees-list', 'committees_list' );
function committees_list( $atts, $content = null ) {
  $retData = '';
  $args=array(
    'post_type'           => 'wsta_committees',
    'post_status'    => 'publish',
    'posts_per_page' => -1, 
    'orderby'        => 'date', 
    'order'          => 'DESC',
  );

  $loop = new WP_Query( $args );
  if($loop->have_posts()):
  
    $retData .= '<div class="inner-section01 mar-15 clearfix">
     <div class="container">
      <div class="row">';
        while ( $loop->have_posts() ) : $loop->the_post();
        global $post;

        $imgIcon = get_field('committees_icon');
        
        $retData .= '<div class="col-sm-6">
          <div class="committee-box">
            <div class="heading clearfix">
              <div class="img">'.($imgIcon['url'] ? '<img src="'.$imgIcon['url'].'" alt="'.$imgIcon['alt'].'">' : '').'</div>
              <div class="txt">'.get_the_title().'</div>
            </div>
            <div class="content">
              <p>Current Chairman: Tony Grayson <a href="'.get_permalink().'">See details</a></p>
            </div>
          </div>
        </div>';
        endwhile;

    $retData .= '</div>
      </div>
    </div>';
  endif;
  
  wp_reset_query();
  
  return $retData;
}

// create shortcode WSTA Member List
add_shortcode( 'wsta-member-list', 'wsta_member_list' );
function wsta_member_list( $atts, $content = null ) {
  $retData = '';
  $args = array ( 
    'role__not_in' => array('administrator','editor','author','contributor','subscriber'),
    'number'       => '9',
    'orderby'      => 'date',
    'order'        => 'ASC',
  );

  $blogusers = get_users( $args );
  if($content) $retData .= '<h5>'.$content.'</h5>';
  if(count($blogusers)>0):
  
    $retData .= '<ul>';
    foreach ( $blogusers as $uKey => $user ): 
      $all_meta_for_user = get_user_meta( $user->ID );  
      $retData .= '<li>'.wp_get_attachment_image( end($all_meta_for_user['custom_field_242']) , array('300', '300'), "", array( "class" => "img-responsive image" ) ).'</li>';
    endforeach;
    $retData .= '</ul>';
  endif;  
  wp_reset_query();  
  return $retData;
}


// create shortcode Budget List Slider
add_shortcode( 'budget-slider-list', 'budget_slider_list' );
function budget_slider_list( $atts, $content = null ) {
  $retData = '';
  $show = (isset($atts['show'])?$atts['show']:7);
  $args=array(
    'post_type'           => 'budget_list',
    'post_status'    => 'publish',
    'posts_per_page' => $show, 
    //'orderby'        => 'date', 
    //'order'          => 'DESC',
  );

  $loop = new WP_Query( $args );
  if($loop->have_posts()):

    $retData .= (isset($content)? '<h2>'.$content.'</h2><div class="clearfix"></div>' : '').'
        <div class="jcarousel-wrapper">
          <div class="jcarousel">
            <ul>';

      while ( $loop->have_posts() ) : $loop->the_post();
      global $post;

        $retData .= '<li>
                <div class="budget-article clearfix">
                  <figure>'.( has_post_thumbnail() ? get_the_post_thumbnail($post->ID,'thumbnail') : '<img src="https://via.placeholder.com/150x150?text=Press" />').'</figure>
                  <article>
                    <h6>'.get_the_title().'</h6>
                    <p>'.excerpt(20).'</p>
                    <div class="btn-read-more"><a href="'.get_permalink().'">Read more</a></div>
                  </article>
                </div>
              </li>';
      endwhile;

    $retData .= '</ul>
          </div>
          <a href="#" class="jcarousel-control-prev">&lsaquo;</a> <a href="#" class="jcarousel-control-next">&rsaquo;</a>
          <p class="jcarousel-pagination"></p>
        </div>';   
      
  endif;  
  wp_reset_query();  
  return $retData;
}


// create shortcode Regulations List
add_shortcode( 'regulations-list', 'regulations_list' );
function regulations_list( $atts, $content = null ) {
  $retData = '';
  $show = (isset($atts['show'])?$atts['show']:'-1');
  $args=array(
    'post_type'           => 'regulations_list',
    'post_status'    => 'publish',
    'posts_per_page' => $show, 
    //'orderby'        => 'date', 
    //'order'          => 'DESC',
  );

  $loop = new WP_Query( $args );
  if($loop->have_posts()):

    $retData .= '<div class="row text-center">';
      $n=0;
      while ( $loop->have_posts() ) : $loop->the_post();
      global $post;
        $imgIcon = get_field('regulations_icon');
        
        $retData .= ($n!=0 && $n%3==0 ? '</div><hr><div class="row text-center">' : '');
        
        $retData .= '<div class="col-sm-4">
              <div class="regulation-box clearfix">
                <p>'.( $imgIcon['url'] ? '<img src="'.$imgIcon['url'].'" src="'.$imgIcon['alt'].'" />' : '<img src="https://via.placeholder.com/52x54?text=Icon" />').'</p>
                <h6>'.get_the_title().'</h6>
                <p>'.excerpt(20).'</p>
                <div class="btn-read-more"><a href="'.get_permalink().'">More details</a></div>
              </div>
            </div>';
      $n++;
      endwhile;

    $retData .= '</div>';   
      
  endif;  
  wp_reset_query();  
  return $retData;
}



