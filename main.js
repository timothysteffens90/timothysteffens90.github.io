function generateAffirmation() {
    
    var theDiv = document.getElementById("affirmation");
    
    var firstAffirmation = ["Champ,", "Fact:", "Everybody says", "Dang...", "Check it:", "Just saying...", "Superstar,", "Tiger,", "Self,","Know this:", "News alert:", "Girl,","Ace,","Excuse me but","In my opinion,","Hear ye, hear ye:","Okay, listen up:"];
    var secondAffirmation = ["the mere idea of you","your soul","your hair today","everything you do","your personal style","every thought you have","that sparkle in your eye","your presence here","what you got going on","the essential you","your life's journey","your DNA","that brain of yours","your choice of attire","the way you roll","whatever your secret is","all of y'all"];
    var thirdAffirmation = ["has serious game,","rains magic,","deserves the Nobel Prize,","raises the roof,","breeds miracles,","is paying off big time,","shows mad skills,","just shimmers,","is a national treasure,","gets the party hopping,","is the next big thing,","roars like a lion,","is a rainbow factory,","is made of diamonds,","makes birds sing,","should be taught in school,","makes my world go 'round,","is 100% legit,"];
    var fourthAffirmation = ["24/7.","can I get an Amen?","and that's a fact.","so treat yourself.","you feel me?","that's just science.","would I lie?","for reals.","mic drop.","you hidden gem.","snuggle bear.","period.","can I get an Amen?","now let's dance.","high five.","say it again!","according to CNN.","so get used to it."];
    
    var first = firstAffirmation[randomNumber(firstAffirmation.length)];
    var second = secondAffirmation[randomNumber(secondAffirmation.length)];
    var third = thirdAffirmation[randomNumber(thirdAffirmation.length)];
    var fourth = fourthAffirmation[randomNumber(fourthAffirmation.length)];
    theDiv.innerHTML = first + " " + second + " " + third + " " + fourth; 
}

function randomNumber(max) {
	return Math.floor(Math.random() * max);
}

