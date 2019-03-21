<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */

?>
 <!-- Featured Videos section -->

    <footer class="footer_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-3 col-sm-12 footer_sec1">
                      <div class="footer_logo">
                        <a href="<?php echo home_url( '/' );?>"><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/footer_logo.png" /></a>
                      </div>
                      <?php
                      if ( has_nav_menu( 'social' ) ) : ?>
                        <div class="social_icon">
                          <?php
                            wp_nav_menu( array(
                              'theme_location' => 'social',
                              'menu_class'     => 'social-links-menu',
                              'depth'          => 1,
                              'link_before'    => '<span class="screen-reader-text">',
                              'link_after'     => '</span>' . twentyseventeen_get_svg( array( 'icon' => 'chain' ) ),
                            ) );
                          ?>
                        </div><!-- .social-navigation -->
                      <?php endif;
                      ?>
                      <div class="ft_text">
                        <p>Copyright © <?php echo @date('Y');?> Offshore Industries. All rights reserved.</p>
                      </div>
                    </div>

                    <?php
                    if( is_active_sidebar( 'footer-menu-sidebar' ) )
                      dynamic_sidebar( 'footer-menu-sidebar' );
                    ?>
                    <div class="col-md-3 col-sm-12 footer_sec4">
                      <div class="hp_link">
                        <h4>Headquarters:</h4>
                        <?php
                        echo(get_field('footer_location', 'option') ? '<p>'.nl2br(get_field('footer_location', 'option')).'</p>' : '');
                        echo(get_field('footer_phone', 'option') ? '<p>Call Toll Free: '.get_field('footer_phone', 'option').'</p>' : '');
                        echo(get_field('footer_fax', 'option') ? '<p>Fax: '.get_field('footer_fax', 'option').'</p>' : '');
                        echo(get_field('footer_email', 'option') ? '<p><a href="mailto:'.get_field('footer_email', 'option').'" class="text-white">Email:'.get_field('footer_email', 'option').'</a></p>' : '');
                        ?>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>

    <!-- //Featured Videos section -->

<script>
  $(document).ready(function(){
    $('.menu_open').click(function(){
    $('.mob_menu').addClass("active");
    });
    $(".menu_close").click(function(){
    $(".mob_menu").removeClass("active");
  });

  });
</script>

<script>
  $(document).ready(function(){
    $('.menu_open').click(function(){
    $('.site_hp').addClass("active");
    });
    $(".menu_close").click(function(){
    $(".site_hp").removeClass("active");
  });

  });
</script>



<script>
  $('.ytvideo[data-video]').one('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var width = $this.attr("width");
    var height = $this.attr("height");
    $this.html('<iframe src="https://www.youtube.com/embed/rQNdkc521Eg/' + $this.data("video") + '?autoplay=1"></iframe>');
  });
  $('.watch_video[data-video]').one('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    $('#video_container_' + $this.data("id")).html('<iframe src="https://www.youtube.com/embed/' + $this.data("video") + '/" width="100" height="230" frameborder="0"></iframe>');
  });
</script>

<!-- /JAVASCRIPT SECTION -->
 <script src="https://cdn.jsdelivr.net/npm/wheelnav@1.7.1/js/dist/raphael.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/wheelnav@1.7.1/js/dist/wheelnav.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.0.0/d3.min.js"></script>
  <script src="<?php echo esc_url(get_stylesheet_directory_uri()); ?>/assets/js/app.js"></script>
    <script>
    make_circle_menu("<?php echo esc_url(get_stylesheet_directory_uri()); ?>/assets/images/circle/");
  </script>
<?php wp_footer(); ?>
</body>
</html>
