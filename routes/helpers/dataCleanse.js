module.exports = {
	keywordFormat: function(results){
		// REMOVE WORDS
		let removeWords = ['a', 'an', 'the', 'my', 'of', 'in', 'to', 'for', 'with','on', 'at', 'from', 'by', 'about', 'as', 'into', 'like', 'this', 'and', 'the', 'through', 'this', 'your', 'him', 'her', 'yours', 'mine']
		console.log('results in keywordFormat funciotn', results);				
		let rawData = results.KeyPhrases;
		let keyWords = [];

		
		rawData.sort(function(a, b) {
				return b.Score - a.Score ;
		});	

		rawData.forEach(function(item){
			var text = item.Text;
			var array = text.split(' ');
			for(let i=0; i < array.length; i++){
				if(!removeWords.includes(array[i])){
					keyWords.push({
					  keyword: array[i].toLowerCase(),
					  score: item.Score});
				}
			}
		});		

		if (keyWords.length > 10){
			keyWords = keyWords.splice(0, 10);
		}		
	
		var keyWordsValuePairs = {};

		for(var i=0;i<keyWords.length;i++){
		  var tmp = keyWords[i].keyword
		  var label = 'keyword'.concat(i+1);
		  keyWordsValuePairs[label] = tmp
		}

		var result = [keyWords, keyWordsValuePairs]
		
		return result;
	},

	sentimentFormat: function(sentiment){
		let sentimentEntry = {
	  		sentiment: sentiment.Sentiment.toLowerCase(),
	  		score_positive: Number((sentiment.SentimentScore.Positive).toFixed(3)),
	  		score_negative: Number((sentiment.SentimentScore.Negative).toFixed(3)),
	  		score_neutral: Number((sentiment.SentimentScore.Neutral).toFixed(3)),
			score_mixed: Number((sentiment.SentimentScore.Mixed).toFixed(3)),
		}
		return sentimentEntry;
	}
}