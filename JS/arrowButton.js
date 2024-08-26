function up() {
    inputDir.x = -1;
    inputDir.y = 0;
}

function down() {
    inputDir.x = 1;
    inputDir.y = 0;
}

function left() {
    inputDir.x = 0;
    inputDir.y = -1;
}

function right() {
    inputDir.x = 0;
    inputDir.y = 1;
}