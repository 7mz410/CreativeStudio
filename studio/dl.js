// Download buttons: <a class="ap-dl" data-repo="CreativeStudio-tlween">. Points the button at the
// visitor's file in the repo's latest GitHub release (macOS dmg, Windows zip, Linux tar.gz); without
// one, it stays on the releases page.
(function () {
  var ua = navigator.userAgent;
  var os = /Mac/i.test(ua) ? 'macos' : /Win/i.test(ua) ? 'windows' : /Linux|X11/i.test(ua) ? 'linux' : null;
  var label = { macos: 'macOS (Apple silicon)', windows: 'Windows', linux: 'Linux' };
  document.querySelectorAll('a.ap-dl[data-repo]').forEach(function (a) {
    var repo = '7mz410/' + a.dataset.repo;
    a.href = 'https://github.com/' + repo + '/releases/latest';
    if (!os) return;
    fetch('https://api.github.com/repos/' + repo + '/releases/latest')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (rel) {
        var asset = rel && rel.assets.find(function (x) { return x.name.indexOf('-' + os + '-') > 0 && !/SHA256/.test(x.name); });
        if (!asset) return;
        a.href = asset.browser_download_url;
        a.title = label[os] + ' · ' + rel.tag_name.replace(/^v/, '');
      })
      .catch(function () {});
  });
})();
