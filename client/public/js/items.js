function getItems() {

    $.get({
        url: "http://localhost:8080/api/questions",
        success: function(result) {

            var list = $("div#question")

            list.empty()
            for (var idx = 0; idx < result.length; idx++) {
                //var html = `<li><h3>${result[idx].contributor}</h3></li><li><h3>${result[idx].article}</h3></li>`
                var html =
                    `
                		<div class="entry-c">
                	   <div class="entry-title">
                				<h2><a href="/questions/${result[idx]._id}">${result[idx].title}</a></h2>
                		 </div>
                			 <ul class="entry-meta clearfix">
                         <li><a href="#"><i class="icon-user"></i> Ivan Gerard</a></li>
                				 <li style="display: list-item;"><a href=""><i class="icon-thumbs-up"></i></a><span>130 Likes</span></li>
                				 <li style="display: list-item;"><a href=""><i class="icon-thumbs-down"></i></a><span>30 Dislikes</span></li>
                			</ul>
                      <br>
                				</div>
                      <hr>
                    `
                list.append(html)
            }
            console.log(result);
        }
    })
}
//
// function postItem(result) {
//
//     $.post({
//         url: "http://localhost:8080/api/questions",
//         data: {
//             "questions": $("#article").val().trim(),
//             "votes": $("#contributor").val().trim()
//         },
//         success: function(result) {
//             getItems()
//         }
//     })
// }

$(function() {
    getItems()
    $("#form-item").unbind().on("submit", function(event) {
        event.preventDefault()
        postItem()
    })
})
