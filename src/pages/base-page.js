import wepy from 'wepy'

export default class BasePage extends wepy.page {

	onShareAppMessage(options) {
		console.log('BasePage onShareAppMessage->' + options);
		return {
			title: '标题',
			path: '/pages/qutu',
			imageUrl: '../images/favorite.png'
		}
	}

	onLoad() {
		wepy.showShareMenu(true, function() {
			console.log('success');
		}, function() {
			console.log('faile');
		}, function() {
			console.log('complete');
		})
	}

}