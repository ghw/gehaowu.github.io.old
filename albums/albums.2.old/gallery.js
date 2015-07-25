/******************************************************
* #### jQuery My Instagram Gallery v02 ####
* Coded by Ican Bachors 2014.
* http://ibacor.com/labs/jquery-my-instagram-gallery/
* Updates will be posted to this site.
******************************************************/

var bcr_mig = function (ins_id,ins_token) {

	var sub = '/media/recent/?access_token=';
	bcr_mig_profile(ins_id,ins_token);
	bcr_mig_album(ins_id,sub,ins_token);

	function bcr_mig_album(user_id,sub,ins_token) {
		$.ajax({
			url: 'https://api.instagram.com/v1/users/' + user_id + sub + ins_token,
			crossDomain: true,
			dataType: 'jsonp'
		}).done(function (data) {
			var html = '';
			$.each(data.data, function(i, item) {
				var title = '';
				if(data.data[i].caption == null){
					title += Date(data.data[i].created_time);
				}else {
					title += data.data[i].caption.text + ' - ' + Date(data.data[i].created_time);
				}
				html += '<div class="ins_img"><a href="' + data.data[i].images.standard_resolution.url.replace(/\\/, "") + '" class="ins_popup" rel="ins_gallery" title="' + title + '"><img src="' + data.data[i].images.thumbnail.url.replace(/\\/, "") + '" alt="" title="' + title + '"></a></div>';
			});
			html += '<p class="load_more"><input type="submit" class="btn ins_more" value="查看更多"></p>';
			$('.bcr_ins_gallery').append(html);
			$('.ins_more').click(function(){
				bcr_mig_album(user_id,sub,ins_token + '&max_id=' + data.pagination.next_max_id);
				$( ".load_more" ).remove();
				return false;
			});
		});
	}

	function bcr_mig_profile(user_id,ins_token) {
		$.ajax({
			url: 'profile.json',
			dataType: 'json'
		}).done(function (data) {
			var html = '';
			html += '<div class="ins_pr_user"><img src="' + data.data.profile_picture.replace(/\\/, "") + '" class="ins_pr_img" alt="' + data.data.username + '" title="' + data.data.username + ' on instagram"></div>';
			html += '<p>By: ' + data.data.full_name + '</p>';
			html += '<p>Website: <a href="' + data.data.website + '" target="_BLANK">' + data.data.website + '</a></p>';
			html += '<p>' + data.data.license + '</p>';
			$('.bcr_ins_profile').html(html);
		});
	}

}
