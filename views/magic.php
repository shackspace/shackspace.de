<?php
	$file = fopen("http://www.shackspace.de/sopen/text/en", "r");
	if ($file) {
		$door_status = fgets($file,20);
		$door_status = preg_replace('/\n$/',"",$door_status);

		if ( $door_status == "open" ) {
			$door_status_class = "status-open";
		} else if ( $door_status == "closed" ) {
			$door_status_class = "status-closed";
		} else {
			$door_status_class = "status-undefined";
		}
	} else {
		$door_status       = "undefined";
		$door_status_class = "status-undefined";
	}
?>
