export default {
	tabToLabel(tab, top, good) {
		if (top) {
			return '置頂';
		}
		if (good) {
			return '精華'
		}
		switch (tab) {
			case 'share':
				return '分享';
			case 'ask':
				return '問答';
			case 'job':
				return '招聘';
		}
	},
	tabToClass(tab, top, good) {
		if (top) {
			return 'tab_top';
		}
		else if (good) {
			return 'tab_good'
		}
		else {
			return `tab_${ tab }`
		}
	},
	dateStringToRead(str) {
		const olderDate = new Date(str).getTime()
		const uxGap = Date.now().valueOf() - olderDate.valueOf()
		
		let num = -1;
		let label = '';

		if (uxGap/1000/60/60/24/30/12 >= 1) {
			num = uxGap/1000/60/60/24/30/12
			label = '年前'
		}
		else if (uxGap/1000/60/60/24/30 >= 1) {
			num = uxGap/1000/60/60/24/30
			label = '月前'	
		}
		else if (uxGap/1000/60/60/24 >= 1) {
			num = uxGap/1000/60/60/24
			label = '日前'		
		}
		else if (uxGap/1000/60/60 >= 1) {
			num = uxGap/1000/60/60
			label = '小時前'
		}
		else if (uxGap/1000/60 >= 1) {
			num = uxGap/1000/60
			label = '分鐘前'
		}
		else if (uxGap/1000 >= 10) {
			num = uxGap/1000
			label = '秒前'
		}
		else if (uxGap/1000 >= 1) {
			num = 0
			label = '數秒前'
		}
		else {
			num = 0
			label = '剎那前'	
		}

		if(num === -1) throw '#dateStringToRead 轉換失敗'
		
		const result = num != 0 ? `${ parseInt(num,10) }${ label }` : `${ label }`;
		
		return result
	}
}