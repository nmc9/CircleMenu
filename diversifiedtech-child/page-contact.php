<?php
/**
 * Template Name: Contact Page
 * https://stackoverflow.com/questions/41738362/how-to-include-pagination-in-a-wordpress-custom-post-type-query
 */

get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

  <section class="contact_page_section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="col-md-6 col-sm-12 contact_page_sec_left">
            <div class="contact_info">
              <div class="contact_img">
                <img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/contact_img.jpg" />
              </div>
              <?php if(get_field('contact_location', 'option')): ?>
              <div class="address">
                <h4>Headquarters</h4>
                <ul>
                  <li><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/location_icon.png" /><p><?php echo nl2br(get_field('contact_location', 'option'));?></p></li>
                </ul>
              </div>
              <?php endif; ?>
              <?php if(get_field('contact_phone', 'option')): ?>
              <div class="address">
                <h4>Call Toll Free</h4>
                <ul>
                  <li><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/phone_icon.png" /><p><?php echo get_field('contact_phone', 'option');?></p></li>
                </ul>
              </div>
              <?php endif; ?>
              <?php if(get_field('contact_fax', 'option')): ?>
              <div class="address">
                <h4>Fax</h4>
                <ul>
                  <li><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/fax_icon.png" /><p><?php echo get_field('contact_fax', 'option');?></p></li>
                </ul>
              </div>
              <?php endif; ?>
              <?php if(get_field('contact_email', 'option')): ?>
              <div class="address">
                <h4>Email</h4>
                <ul>
                  <li><img src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/images/email_icon.png" /><p><?php echo get_field('contact_email', 'option');?></p></li>
                </ul>
              </div>
              <?php endif; ?>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 contact_page_sec_right">
            <div class="contact_form_info">
            <?php echo do_shortcode('[contact-form-7 id="10" title="Contact form"]'); ?>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
 <?php /*

  <section class="contact_page_map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.338407861816!2d-76.45196918508604!3d40.995965728132184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c58783ccee599b%3A0x65b7187ddbc0cefe!2s95+E+10th+St%2C+Bloomsburg%2C+PA+17815%2C+USA!5e0!3m2!1sen!2sin!4v1545217293372" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>

   */ ?>

<?php endwhile; // End of the loop. ?>

<?php get_footer();
