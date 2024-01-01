<!DOCTYPE html>
<html>
<?php
header('X-Frame-Options: SAMEORIGIN'); // don't allow other sites to use my proxy
echo file_get_contents($_GET['url']);
?>
</html>