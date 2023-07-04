<?php ob_start() ?>
Ben West<br />
Graphic design + programming<br />
Amsterdam
<?php $header = ob_get_clean() ?>

<?php ob_start() ?>
<a class="blue" href="mailto:ben@bewe.me">ben@bewe.me</a><br />
<a class="blue" href="https://twitter.com/be_we_me" target="_blank">twitter</a>,
<a class="blue" href="https://instagram.com/beweme" target="_blank">instagram</a>,
<a class="blue" href="http://beweme.tumblr.com/" target="_blank">tumblr</a>,
<a class="blue" href="https://are.na/ben-west" target="_blank">are.na</a>
<?php $footer = ob_get_clean() ?>

<?php
$projects = [
  [
    "url" => "https://softearth.org/",
    "title" => "soft earth"
  ],
  [
    "url" => "https://www.petertalisman.quest/",
    "title" => "jameszoo.com"
  ],
  [
    "url" => "https://www.petertalisman.quest/",
    "title" => "petertalisman.quest",
    "credit" => [
      "url" => "https://softearth.org/",
      "title" => "soft earth"
    ]
  ],
  [
    "url" => "https://johwska.com/",
    "title" => "johwska.com"
  ],
  [
    "url" => "https://www.slackcity.org.uk/",
    "title" => "slackcity.org.uk"
  ],
  [
    "url" => "http://schemasofuncertainty.com/",
    "title" => "schemasofuncertainty.com"
  ],
  [
    "url" => "http://justanideafilm.com/",
    "title" => "justanideafilm.com"
  ],
  [
    "url" => "http://lynnecarty.info/",
    "title" => "lynnecarty.info",
    "credit" => [
      "url" => "https://simonsweeney.me/",
      "title" => "Simon Sweeney"
    ]
  ],
  [
    "url" => "http://callumcopley.com/",
    "title" => "callumcopley.com"
  ],
  [
    "url" => "https://www.bo-en.info/",
    "title" => "bo-en.info",
    "credit" => [
      "url" => "https://simonsweeney.me/",
      "title" => "Simon Sweeney"
    ]
  ],
  [
    "url" => "http://a-friend-is-writing.bewe.me/",
    "title" => "A Friend is Writing",
    "credit" => [
      "url" => "https://simonsweeney.me/",
      "title" => "Simon Sweeney"
    ]
  ],
  [
    "url" => "http://hand.bewe.me/",
    "title" => "hand.gallery",
    "credit" => [
      "url" => "https://simonsweeney.me/",
      "title" => "Simon Sweeney"
    ]
  ],
  [
    "url" => "https://www.jbe-books.com/products/google-volume-1-by-king-zog",
    "title" => "Google, Vol. 1",
    "credit" => [
      "url" => "http://felixheyes.com",
      "title" => "Felix Heyes"
    ]
  ],
]
  ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

  <title>Ben West</title>

  <link rel="stylesheet" href="./style.css" type="text/css" />

  <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Ben West" />
  <meta property="og:url" content="http://bewe.me" />
  <meta property="og:description" content="Design + programming" />
  <meta property="og:image" content="http://bewe.me/social.png" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Ben West" />
  <meta name="twitter:url" content="http://bewe.me" />
  <meta name="twitter:description" content="Design + programming" />
  <meta name="twitter:image" content="http://bewe.me/social.png" />

  <link rel="icon" href="http://bewe.me/favicon_16.png" sizes="16x16" />
  <link rel="icon" href="http://bewe.me/favicon_32.png" sizes="32x32" />
</head>

<body>

  <div class="cursor"></div>

  <a class="link"></a>

  <main style="opacity: 0">

    <div class="list">
      <div class="list__header">
        <?= $header ?>
      </div>
      <div class="list__projects">
        <?php foreach ($projects as $project): ?>
                  <div class="list__project">
                    <a class="blue" href="<?= $project["url"] ?>" target="_blank" rel="noopener noreferrer">
                      <?= $project["title"] ?></a><?php if ($credit = $project["credit"] ?? null): ?>, with
                            <a href="<?= $credit["url"] ?>" target="_blank" rel="noopener noreferrer">
                              <?= $credit["title"] ?>
                            </a>
                  <?php endif ?>
                  </div>
        <?php endforeach ?>
      </div>
      <div class="list__footer">
        <?= $footer ?>
      </div>
    </div>

    <div class="table">
      <div class="table__header">
        <?= $header ?>
      </div>
      <?php foreach ($projects as $project): ?>
                <div class="table__project-title">
                  <a class="blue" href="<?= $project["url"] ?>" target="_blank" rel="noopener noreferrer">
                    <?= $project["title"] ?>
                  </a>
                </div>
                <div class="table__project-credit">
                  <?php if ($credit = $project["credit"] ?? null): ?>
                            with
                            <a href="<?= $credit["url"] ?>" target="_blank" rel="noopener noreferrer">
                              <?= $credit["title"] ?>
                            </a>
                  <?php endif ?>
                </div>
      <?php endforeach ?>
      <div class="table__footer">
        <?= $footer ?>
      </div>
    </div>
  </main>

  <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
  <script type="text/javascript" src="./script.js"></script>
</body>

</html>