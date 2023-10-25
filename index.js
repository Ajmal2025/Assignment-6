"use strict";
//q6
/*
Stripping Names: Store a person’s name, and include
some whitespace characters at the beginning and end of the
name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces. */
//escape sequence \n for line break   \t for space
let somename = "      ajmal\n muhammad \t web        \t      developer ";
console.log(somename);
//after trim
console.log(somename.trim());
