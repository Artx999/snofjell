<?php
$root = "";
require $root . "structure/head.php";
echo "<script>giveTitle('Hytter')</script>";
require $root . "structure/nav.php";
?>
<body>
<main>
    <div id="container1">
        <div id="grantoppen" class="cabin"></div>
        <div id="granbo" class="cabin"></div>
        <div id="granstua" class="cabin"></div>
        <div id="granhaug" class="cabin"></div>
        <img src="images/menybilde.jpg" alt="Menybilde">
    </div>
    <div id="container2">
        <h1 id="cabin"></h1>
        <p id="beds"></p>
        <p id="standard"></p>
        <p id="sauna"></p>
    </div>
    <div id="container3">
    </div>
</main>
<div id="video-container">
    <video controls>
        <source type="video/mp4" src="hyttefelt.mp4">
    </video>
</div>
</body>