<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?>
<!-- Choose us  section -->
	<?php if(get_the_content()!=''): ?>
    <section class="Choose_us_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <?php the_content();?>
                </div>
                <?php
                if( have_rows('additional_content') ):
                  while ( have_rows('additional_content') ) : the_row();

                    if( get_row_layout() == 'three_column_like_home_page' ):                
                    ?>
                      <div class="col-md-12 <?php the_sub_field('main_column_class');?>">
                        <?php 
                        if( have_rows('column') ):
                          while ( have_rows('column') ) : the_row(); 
                            $image = get_sub_field('image');
                            echo '<div class="col-md-4 col-sm-12"><div class="'.get_sub_field('column_class').'">';
                            echo($image?'<img src="'.$image['url'].'" alt="'.$image['alt'].'" />':'');
                            echo(get_sub_field('heading')?'<h4>'.get_sub_field('heading').'</h4>':'');
                            echo(get_sub_field('description')?'<p>'.nl2br(get_sub_field('description')).'</p>':'');
                            echo '</div></div>';
                          endwhile;
                        endif;
                        ?>
                      </div>
                    <?php 
                    endif;

                  endwhile;
                endif;
                ?>
            </div>
        </div>
    </section>
	<?php endif; ?>
    <!-- //Choose us section -->
    <?php
    $n=1;
    if( have_rows('additional_content') ):
      while ( have_rows('additional_content') ) : the_row();

        if( get_row_layout() == 'middle_content_with_one_side_content__like_home_page' ):  

          $nh = (get_sub_field('image_start_form_right_side')?1:0);
          if( have_rows('middle_content') ):
            while ( have_rows('middle_content') ) : the_row(); 
        ?>
            <section class="<?php the_sub_field('container_class');?>">
                <div class="container">
                    <div class="row">
                      <?php if(get_sub_field('full_width_text')): ?>
                        <div class="col-md-12 col-sm-12 <?php the_sub_field('full_container_class');?>">
                            <?php the_sub_field('full_width_text');?>
                        </div>
                      <?php 
                      endif;

                      if(get_sub_field('half_container_box')):
                         $image = get_sub_field('half_width_image');
                      ?>
                        <div class="col-md-12 col-sm-12 <?php the_sub_field('half_container_class');?>">
                         <?php if($nh%2==0): ?>
                          <div class="col-md-6 col-sm-12 <?php the_sub_field('half_image_container_class');?>">
                            <?php echo($image?'<img src="'.$image['url'].'" alt="'.$image['alt'].'" />':''); ?>
                          </div>
                          <div class="col-md-6 col-sm-12 <?php the_sub_field('content_image_container_class');?>">
                            <?php the_sub_field('half_container_box');?>
                          </div>
                         <?php else: ?>
                          <div class="col-md-6 col-sm-12 <?php the_sub_field('content_image_container_class');?>">
                            <?php the_sub_field('half_container_box');?>
                          </div>
                          <div class="col-md-6 col-sm-12 <?php the_sub_field('half_image_container_class');?>">
                            <?php echo($image?'<img src="'.$image['url'].'" alt="'.$image['alt'].'" />':''); ?>
                          </div>
                         <?php endif; ?>
                        </div>
                      <?php 
                      $nh++;
                      endif;
                      ?>
                    </div>
                </div>
            </section>
        <?php 
            endwhile;
          endif;

        endif;


        if( get_row_layout() == 'middle_content_with_two_side_content_like_service_bureau' ):  

          if( have_rows('middle_content_without_image_box') ):
          	$nh = 0;
            while ( have_rows('middle_content_without_image_box') ) : the_row(); 
        ?>
            <section class="<?php the_sub_field('container_class');?>">
                <div class="container">
                    <div class="row">
                      <?php if(get_sub_field('full_width_text')): ?>
                        <div class="col-md-12 col-sm-12 <?php the_sub_field('full_container_class');?>">
                            <?php the_sub_field('full_width_text');?>
                        </div>
                      <?php 
                      endif;

                      if(get_sub_field('left_container_box') || get_sub_field('right_container_box')):
                      ?>
                        <div class="col-md-12 col-sm-12 <?php the_sub_field('half_container_class');?>">
                          <div class="col-md-6 col-sm-12 <?php the_sub_field('left_content_container_class');?>">
                            <?php the_sub_field('left_container_box');?>
                          </div>
                          <div class="col-md-6 col-sm-12 <?php the_sub_field('right_content_container_class');?>">
                            <?php the_sub_field('right_container_box');?>
                          </div>
                        </div>
                      <?php 
                      $nh++;
                      endif;
                      ?>
                    </div>
                </div>
            </section>
        <?php 
            endwhile;
          endif;

        endif;
        

        if( get_row_layout() == 'video_section_like_home_page' ): 
        ?>
            <section class="<?php the_sub_field('video_container_class');?>">
                <div class="container">
                    <div class="row">
                      <?php if(get_sub_field('video-full-content')): ?>
                        <div class="col-md-12 col-sm-12 <?php the_sub_field('content_container_class');?>">
                            <?php the_sub_field('video-full-content');?>
                        </div>
                      <?php 
                      endif;
                      ?>

                      <div class="col-md-12 col-sm-12 <?php the_sub_field('video-container_class');?>">
                        <?PHP 
                        if( have_rows('video_section') ):
                          $vn=1;
                          while ( have_rows('video_section') ) : the_row(); 
                            $video_link = get_sub_field('video_link');
                            //https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
                        ?>
                          <div class="col-md-4 col-sm-12">
                            <div class="video_sec">
                              <div id="video_container_<?php echo $vn;?>" class="ytvideo" data-video="<?php echo $video_link;?>">
                              </div>
                            </div>
                            <div class="video-title">
                              <ul>
                                <li><b>Web</b> App Video</li>
                                <li><a class="watch_video" data-video="<?php echo $video_link;?>" data-id="<?php echo $vn;?>" href="javascript:void(0)">watch video</a></li>
                              </ul>
                            </div>
                          </div>
                          <?PHP 
                            $vn++;
                            endwhile;
                          endif;
                          ?>
                      </div>

                    </div>
                </div>
            </section>
        <?php 
        endif;

      endwhile;
    endif;
    ?>
