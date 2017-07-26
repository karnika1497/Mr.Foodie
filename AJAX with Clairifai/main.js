window.onload = function() {

	// Write AJAX call here 
var data = '{"inputs":[{"data":{"image":{"url":"http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG"}}}]}'
    $.ajax({
        'type': 'POST',
        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
        'headers': {
            'Authorization': 'Key f3c1abe985594b70b378874adc2b8c42',
            'Content-Type': 'application/json'
        },
        'data': data,
        success: function (response) {
           // console.log(response.outputs[0]);
			var ingredients = response.outputs[0].data.concepts;
            var list = '';
            for (var i =0;i < ingredients.length;i++) {
                list += '<div class="ingredient">' + ingredients[i].name + '</div>'
            }
           // $('.ingredients').html(list);
        },
        error: function (xhr) {
           // console.log(xhr);
        } 
    })
	
}