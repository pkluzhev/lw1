<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>

  <input type="button" id="hider" value="Нажмите, чтобы показать текст" />

  <div id="text">Текст</div>

  <div>Текст, идущий за скрытым текстом</div>

  <script>
    document.getElementById('text').hidden = true;
    document.getElementById('hider').onclick = function() {
      document.getElementById('text').hidden = false;
    }
  </script>
</body>

</html>