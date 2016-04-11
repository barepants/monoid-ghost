/* globals Monoid, jQuery, hljs */
(function ($, config) {
  var html;
  var $siteNav = $('#site-nav');
  var $siteNavToggle = $('.site-nav-toggle');
  var $siteNavToggleIcon = $('.site-nav-toggle .fa');

  if (config.social_links.length > 0) {
    html = '<ul class="social-links social-icons">';
    config.social_links.forEach(function (link) {
      html +=
        '<li>' +
          '<a href="' + link[1] + '">' +
            '<span class="visuallyhidden">' + link[0] + '</span>' +
          '</a>' +
        '</li>\n';
    });
    html += '</ul>';
    $('#social-links').html(html);
  }

  $siteNavToggle.click(function () {
    $siteNav.toggleClass('is-toggled');
    $siteNavToggleIcon.toggleClass('fa-times').toggleClass('fa-bars');
    if ($siteNav.hasClass('is-toggled')) {
      $siteNav.attr('aria-expanded', true);
      $siteNavToggle.attr('aria-expanded', true);
    } else {
      $siteNav.attr('aria-expanded', 'false');
      $siteNavToggle.attr('aria-expanded', 'false');
    }
  });

  $('.post-content').fitVids();
  $('pre code[class]').each(function (i, block) {
    hljs.highlightBlock(block);
  });
}(jQuery, Monoid.config));
