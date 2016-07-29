/**
 * Copyright (c) ${DATE}. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 */
(function () {
    "use strict";


    desc("Default Build");
    task("default", [ "version" ], function() {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function() {
        console.log("Checking Node version: .");
        var expectedVersion = "v5.1.1";

        var actualVersion = process.version;

        if (actualVersion !== expectedVersion) {
            fail("Incorrect Node version" + expectedVersion + ", but was " + actualVersion);
        }

    });

}());