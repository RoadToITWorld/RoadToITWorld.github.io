const storyList = document.getElementById("story-list");
const storyText = document.getElementById("story-text");
const storyImage = document.getElementById("story-image");

storyList.addEventListener("click", function(e) {
  const selectedStory = e.target;
  const storyId = selectedStory.getAttribute("id");
  
  // Remove the 'selected' class from all stories
  const stories = document.getElementsByClassName("story");
  for (let i = 0; i < stories.length; i++) {
    stories[i].classList.remove("selected");
  }

  // Add the 'selected' class to the selected story
  selectedStory.classList.add("selected");
  
  // Remove the 'active' class from story text
  storyText.classList.remove("active");

  // Update the text for the selected story
  switch (storyId) {
    case "story-1":
      storyText.innerHTML = "\"Rosie the Riveter\" is a cultural icon and symbol of the American women who worked in factories and shipyards during World War II, many of whom produced munitions and war supplies. The name \"Rosie\" was inspired by a 1942 song of the same name, which celebrated the women who were taking on traditionally male roles to support the war effort. The image of \"Rosie\" typically depicts a strong, confident woman wearing a bandana and flexing her bicep.During the war, a large number of men were away fighting, leaving a shortage of workers in the factories. To fill this gap, millions of women entered the workforce, many for the first time. They worked long hours and took on dangerous jobs, such as welding and operating heavy machinery. Their contributions were vital to the war effort and helped to change perceptions of women's capabilities and roles in society. The portrayal of Rosie the Riveter encouraged women to join the workforce and was an important aspect of the War effort. This was a significant change in the society as after the war, most women were expected to leave the workforce and return to traditional domestic roles. However, many of these women had tasted independence and financial stability and refused to give it up.";
      storyImage.innerHTML = '<img src="womenMovement.jpg" alt="Story 1 Image">';
      break;
    case "story-2":
      storyText.innerHTML = "Anne Frank was a Jewish girl who lived during World War II. She is most famous for the diary she kept while she and her family were in hiding from the Nazis in Amsterdam, Holland. The diary, which she wrote between June 12, 1942, and August 1, 1944, details her life in hiding, her thoughts and feelings, and the events happening around her. In July 1942, the Frank family went into hiding in the \"Secret Annex\" of an Amsterdam building, along with another family and a dentist. They were helped by a group of non-Jewish friends and remained hidden for over two years. However, in August 1944, they were discovered by the Nazis and arrested. Anne and her sister, Margot, were sent to the Bergen-Belsen concentration camp, where they both died of typhus in March 1945, just a few weeks before the camp was liberated. Anne's diary was found by a friend, who gave it to her father, Otto Frank, the only survivor of the family. It was published in 1947 under the title \"The Diary of Anne Frank\" and has since been translated into many languages. The diary has become one of the most widely read and studied documents of the Holocaust and an important testimony of the human cost of the war. It also symbolizes the innocent victims of war and the Holocaust, and has become a reminder of the importance of tolerance and human rights. You can read her diary here\"http://www.rhetorik.ch/Aktuell/16/02_13/frank_diary.pdf\"";
      storyImage.innerHTML = '<img src="annaFrank.jpg" alt="Story 2 Image">';
      break;
    case "story-3":
      storyText.innerHTML = "Pick a card, any card. The card you pick might just save everyone\???s life. Sound strange? Well, this is a story on how packs of playing cards saved the lives of Allied WW2 soldiers too! Bicycle cards have been around for over 130 years. It\???s a beloved tool of entertainment and tool for gamblers, magicians, seniors and college students the world over. But something new came out only in recent years. Bicycle cards were a tool to help rescue POWs from Nazi Camps. Allied solders who were captured in prison camps were deep in enemy territory and of course far from home. But thanks to international agreements, POWs still received their Red Cross care packages, which almost always included packs of cards to pass the time. The Bicycle card company noticed that and approached the British and American Intelligence agencies with an interesting idea. Taking advantage of the upcoming Red Cross Christmas care package to come, they created a very special pack and had them delivered in those packages. As for what made them special? If you got the cards wet, they fell apart and revealed part of a larger MAP complete with escape routes. If you put the cards in the right order, you had a complete map of the surrounding country. With that as a tool, 32 POWs managed to escape Nazi Germany. Another 316 escape attempts were made. There\???s presently 2 packs known left to exist, one in private hands and another in the International Spy Museum. And in 2016, Bicycle created a special edition recreation of those cards in honor of the unique collaboration. Isn't that absolutely brilliant?";
      storyImage.innerHTML = '<img src="playingCards.jpg" alt="Story 3 Image">';
      break;
  }
  
  // Add the 'active' class to story text
  storyText.classList.add("active");
});
