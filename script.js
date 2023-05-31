/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
  let line = textarea.value.split('\n').length

  if(textarea.rows < 6 || line < 6) {
    textarea.rows = line
  }

  if(textarea.rows > 1) {
    chatboxForm.style.alignItems = 'flex-end'
  } else {
    chatboxForm.style.alignItems = 'center'
  }
})


// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
  chatboxMessage.classList.toggle('show')
})


// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
  if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
    dropdownMenu.classList.remove('show')
  }
})


// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const message = textarea.value.trim();
  if (isValid(message)) {
    writeMessage();
    setTimeout(function() {
      autoReply(message);
    }, 1000);
  }
});

if (isValid(textarea.value)) {
  writeMessage();
  setTimeout(() => autoReply(textarea.value.trim()), 1000);
}


function addZero(num) {
  return num < 10 ? '0'+num : num
}

function writeMessage() {
  const today = new Date()
  let message = `
    <div class="chatbox-message-item sent">
      <span class="chatbox-message-item-text">
        ${textarea.value.trim().replace(/\n/g, '<br>\n')}
      </span>
      <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
    </div>
  `
  chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
  chatboxForm.style.alignItems = 'center'
  textarea.rows = 1
  textarea.focus()
  textarea.value = ''
  chatboxNoMessage.style.display = 'none'
  scrollBottom()
}

function autoReply(message) {
  const today = new Date()
  let reply = ''

if (message.toLowerCase().includes('hello')|| message.toLowerCase().includes('hi')) {
    reply = 'Hello! How can I assist you today?';
  } else if (message.toLowerCase().includes('help')) {
    reply = 'Sure, I\'d be happy to help! I offer a variety of features to support you, try saying: "talk", "provider", or "support" to get started!' ;
  } else if (message.toLowerCase().includes('thank')) { 
     reply = 'You\'re very welcome! What else can I help you with today?';
      } else if (message.toLowerCase().includes('bye')) { 
     reply = 'Goodbye! It was great talking to you, let me know if you need anything!';
  } else if (message.toLowerCase().includes('talk')) {
    reply = 'I\'d be happy to talk to you! What do you want to talk about?';
  } else if (message.toLowerCase().includes('resources')) {
    reply = 'Here are some mental health resources: <br><br><a href="https://988lifeline.org/talk-to-someone-now/" target="_blank"> Suicide Prevention Lifeline (988),  </a><a href="https://www.crisistextline.org/" target="_blank"> Crisis Textline (741741),  </a><a href="https://save.org/" target="_blank"> SAVE,  </a><a href="https://www.thetrevorproject.org/" target="_blank"> The Trevor Project (LGBTQ+),  </a><a href="https://www.datocms-assets.com/12810/1594144968-black-mental-health-v2-1.pdf" target="_blank"> The Mental Health Coalition,  </a><a href="https://www.asianmhc.org/" target="_blank"> Asian Mental Health Collective,  </a><a href="https://www.healthyamericas.org/" target="_blank"> National Alliance for Hispanic Health,  </a><a href="https://www.wernative.org/" target="_blank"> We R Native,  </a><a href="https://www.inclusivetherapists.com/" target="_blank"> Inclusive Therapists,  </a><a href="https://www.nami.org/Your-Journey/Individuals-with-Mental-Illness" target="_blank"> NAMI,  </a><a href="https://americanaddictioncenters.org/virtual-meetings" target="_blank"> Virtual Support/Online Addiction Meetings,  </a><a href="https://www.veteranscrisisline.net/" target="_blank"> Veteran Crisis Line,  </a><a href="https://www.nami.org/Your-Journey/Family-Members-and-Caregivers/Learning-to-Help-Your-Child-and-Your-Family" target="_blank"> Learning to Help (NAMI),  </a><a href="https://www.nimh.nih.gov/health/find-help" target="_blank"> NIMH,  </a><a href="https://www.samhsa.gov/mental-health/how-to-talk/friends-and-family-members" target="_blank"> SAMHSA,  </a><a href="https://www.psychiatry.org/patients-families/helping-a-loved-one-cope-with-mental-illness" target="_blank"> APA  </a>';
  } else if (
    message.toLowerCase().includes('anxious') ||
    message.toLowerCase().includes('anxiety') ||
    message.toLowerCase().includes('scared') ||
    message.toLowerCase().includes('edge') ||
    message.toLowerCase().includes('fear') ||
    message.toLowerCase().includes('fast') ||
    message.toLowerCase().includes('restless') ||
    message.toLowerCase().includes('worry') ||
    message.toLowerCase().includes('worried') ||
    message.toLowerCase().includes('trembling') ||
    message.toLowerCase().includes('overwhelm') ||
    message.toLowerCase().includes('tense') ||
    message.toLowerCase().includes('ache') ||
    message.toLowerCase().includes('sweat') ||
    message.toLowerCase().includes('panic')
  ) {
    reply = 'I\'m very sorry to hear that you\'re feeling anxious. Would you like to receive some coping strategies or self-care practices, words of encouragement, or talk about something else?<br><i>Additional resources:<br><i><a href="https://warmline.org/warmdir.html" target="_blank">Warmline Directory</a>';
  } else if (
    message.toLowerCase().includes('sad') ||
    message.toLowerCase().includes('depress') ||
    message.toLowerCase().includes('lonely') ||
    message.toLowerCase().includes('cry') ||
    message.toLowerCase().includes('unmotivated') ||
    message.toLowerCase().includes('moody') ||
    message.toLowerCase().includes('isolation') ||
    message.toLowerCase().includes('isolated') ||
    message.toLowerCase().includes('hopeless') ||
    message.toLowerCase().includes('guilt') ||
    message.toLowerCase().includes('low') ||
    message.toLowerCase().includes('tired')
  ) {
    reply = 'I\'m very sorry to hear that you\'re feeling depressed. Would you like to receive some coping strategies or self-care practices, words of encouragement, or talk about something else? <br><i>Additional resources:<br><a href="https://warmline.org/warmdir.html" target="_blank">Warmline Directory</a>';
  } else if (
    message.toLowerCase().includes('kill') ||
    message.toLowerCase().includes('die') ||
    message.toLowerCase().includes('harm') ||
    message.toLowerCase().includes('crisis') ||
    message.toLowerCase().includes('distress') ||
    message.toLowerCase().includes('line') ||
    message.toLowerCase().includes('worthless') ||
    message.toLowerCase().includes('suicide') ||
    message.toLowerCase().includes('suicidal')
  ) {
    reply = 'I\'m really sorry to hear that you\'re feeling this way. As an AI ChatBot, I will always prioritize your safety and encourage you to seek professional help. Please consider reaching out to a helpline, emergency services in your country, a qualified mental health professional, or a trusted person in your life. Remember, you don\'t have to face this alone, and there are people who care about you and want to help! <br><a href="https://988lifeline.org/talk-to-someone-now/" target="_blank">Suicide Prevention Lifeline - 988</a><br><a href="https://www.crisistextline.org/" target="_blank">Crisis Textline - 741741</a>';
  } else {
    reply = 'Thank you for your message! Unfortunately, I am unable to respond—could you please try saying something else?';
  }
   
  if (message.toLowerCase().includes('depress') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Depressive disorders!<br><br>'
     + '<i>Depressive disorders are characterized by the presence of sad, empty, or irritable moods accompanied by physical and cognitive symptoms. They also differ in terms of duration, timing, and causes.</i><br><br>'
    + '<b>General symptoms of depressive disorders may include:</b> Feelings of helplessness and hopelessness, Loss of interest in daily activities, Appetite or weight changes, Sleep changes, Anger or irritability, Loss of energy, Self-loathing, Reckless behavior, Concentration problems, & Unexplained aches and pains. <i><a href="https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about depressive disorders:</b><i><br><a href="https://www.youtube.com/watch?v=QhukM33VLgo" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/depression/what-is-depression" target="_blank">What is Depression - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank">Depression - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with an depressive disorder:</b><i><br><a href="https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression/art-20045943" target="_blank">Depression: Supporting a family member or friend - Mayo Clinic</a><br><a href="https://www.nytimes.com/2022/10/27/well/family/depression-support.html" target="_blank">How to Help a Partner Living With Depression - New York Times</a><br><a href="https://psychcentral.com/depression/how-to-support-someone-with-depression" target="_blank">How to Help a Friend with Depression - Psych Central</a><br><a href="https://www.goodrx.com/conditions/depression/how-to-help-someone-with-depression" target="_blank">How To Help Someone With Depression - GoodRx Health</a></i>';
}
 else if (message.toLowerCase().includes('anxiety') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Anxiety disorders!<br><br>'
    + '<i>Anxiety disorders are characterized by excessive and persistent fear, worry, anxiety and related behavioral disturbances. Fear involves an emotional response to a threat, whether that threat is real or perceived. Anxiety involves the anticipation that a future threat may arise.</i><br><br>'
    + '<b>General symptoms of anxiety disorders may include:</b> Feeling nervous, restless or tense, Having a sense of impending danger, panic or doom, Increased heart rate, Sweating, Trembling, Trouble concentrating or thinking about anything other than the present worry, Having trouble sleeping, Having difficulty controlling worry, & Having the urge to avoid things that trigger anxiety. <i><a href="https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about anixety disorders:</b><i><br><a href="https://www.youtube.com/watch?v=vtUdHOx494E" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders" target="_blank">What are Anxiety Disorders? - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank">Anxiety Disorders - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with an anxiety disorder:</b><i><br><a href="https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/how-to-help-someone-with-anxiety"target="_blank">How to Help Someone with Anxiety - Johns Hopkins Medicine</a><br><a href="https://greatergood.berkeley.edu/article/item/seven_ways_to_help_someone_with_anxiety" target="_blank">Seven Ways to Help Someone with Anxiety - UC Berkeley GGM</a><br><a href="https://psychcentral.com/anxiety/how-to-help-someone-with-anxiety" target="_blank">6 Ways to Help Someone with Anxiety - Psych Central</a><br><a href="https://rightasrain.uwmedicine.org/mind/mental-health/what-say-and-not-say-someone-anxiety" target="_blank">What to Say (and Not to Say) to Someone with Anxiety - UW Medicine</a></i>';
}
 else if (message.toLowerCase().includes('bipolar') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Bipolar Disorder!<br><br>'
    + '<i>Bipolar disorder is characterized by shifts in mood as well as changes in activity and energy levels. The disorder often involves experiencing shifts between elevated moods and periods of depression. Such elevated moods can be pronounced and are referred to either as mania or hypomania. There are several types of bipolar and related disorders, including Bipolar I disorder, Bipolar II disorder, and Cyclothymic disorder.</i><br><br>'
   + '<b>General symptoms of bipolar disorder(s) may include:</b> Mania, hypomania, and/or Major depressive episodes. <i><a href="https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about bipolar disorders:</b><i><br><a href="https://www.youtube.com/watch?v=KSvk8LLBo2g" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/bipolar-disorders/what-are-bipolar-disorders" target="_blank">What Are Bipolar Disorders? - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/bipolar-disorder" target="_blank">Bipolar Disorder - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with an bipolar disorder:</b><i><br><a href="https://www.nami.org/Personal-Stories/Living-with-Someone-with-Bipolar-Disorder"target="_blank">Living With Someone With Bipolar Disorder - NAMI</a><br><a href="https://www.verywellmind.com/how-to-help-loved-one-with-bipolar-disorder-5113480" target="_blank">How to Help a Loved One With Bipolar Disorder - VeryWellMind</a><br><a href="https://psychcentral.com/blog/helping-your-partner-manage-bipolar-disorder" target="_blank">How to Help a Loved One with Bipolar Disorder - Psych Central</a><br><a href="https://www.goodrx.com/conditions/bipolar-disorder/how-to-help-someone-in-a-manic-episode" target="_blank">How to Help Someone Going Through a Manic Episode - GoodRx Health</a></i>';
}
   else if (message.toLowerCase().includes('stigma') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more learn more about the implications of stigma related to mental health and mental illness!<br><br>'
    + 'The stigma surrounding mental health and mental illness has wide-ranging implications that impact individuals, families, and society. It leads to delayed or avoided help-seeking, social isolation, and alienation, as well as challenges in employment and education. Stigma strains relationships, reduces treatment adherence, and contributes to a public health and economic burden. Missed opportunities for education and awareness further perpetuate the problem.<br><br>'
     + 'Addressing mental health stigma requires collective efforts to promote education, empathy, and open conversations, fostering a supportive environment for those with mental health conditions to receive the care and support they need.<br><br>'
    + 'Open conversations about mental health can help reduce stigma and ensure that individuals with mental health conditions receive the care, compassion, and opportunities they deserve. By working together, we can create a society that values mental health and supports those who are affected by mental illness.<br><br>'
    + '<b>Learn more about stigma:</b><i><br><a href="https://www.youtube.com/watch?v=U1DgYCi9lDI" target="_blank">Mental Health Stigma (Youtube)</a><br><a href="https://www.psychiatry.org/patients-families/stigma-and-discrimination" target="_blank">Stigma, Prejudice & Discrimination Against People with Mental Illness - APA</a></i>';
  }
 else if (message.toLowerCase().includes('schizophrenia') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Schizophrenia!<br><br>'
    + '<i>Schizophrenia is a chronic psychiatric condition that affects a person’s thinking, feeling, and behavior. It is a complex, long-term condition that affects less than 1% of people in the United States.</i><br><br>'
    + '<b>General symptoms of schizophrenia may include:</b> Delusions, Hallucinations, Disorganized thinking (speech) & Extremely disorganized or abnormal motor behavior. <i><a href="https://www.mayoclinic.org/diseases-conditions/schizophrenia/symptoms-causes/syc-20354443" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about schizophrenia:</b><i><br><a href="https://www.youtube.com/watch?v=PURvJV2SMso" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia" target="_blank">What is Schizophrenia? - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/schizophrenia" target="_blank">Schizophrenia - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with schizophrenia:</b><i><br><a href="https://nami.org/Blogs/NAMI-Blog/November-2022/My-Son-Has-Schizophrenia-This-is-My-Advice-to-Caregivers" target="_blank">My Son Has Schizophrenia. This is My Advice to Caregivers. - NAMI</a><br><a href="https://www.verywellhealth.com/how-to-help-someone-with-schizophrenia-5194824" target="_blank">How to Help Someone With Schizophrenia - VeryWellMind</a><br><a href="https://psychcentral.com/schizophrenia/helpful-hints-about-schizophrenia-for-family-members-and-others" target="_blank">Being an Ally: How to Support Someone with Schizophrenia - Psych Central</a><br><a href="https://www.goodrx.com/conditions/schizophrenia/how-to-help-someone-with-schizophrenia" target="_blank">6 Ways to Help Someone With Schizophrenia (Plus 4 Things to Avoid) - GoodRx Health</a></i>';
}
 else if (message.toLowerCase().includes('ptsd') ||
          message.toLowerCase().includes('stress') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Post-Traumatic Stress Disorder or PTSD!<br><br>'
    + '<i>PTSD can develop after an individual has experienced exposure to actual or threatened death, serious injury, or sexual violence.</i><br><br>'
    + '<b>General symptoms of PTSD may include:</b> Intrusive memories, Avoidance, Negative changes in thinking and mood, & Changes in physical and emotional reactions. <i><a href="https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about PTSD:</b><i><br><a href="https://www.youtube.com/watch?v=2KXtlIX_yUs" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd" target="_blank">What is PTSD? - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank">Post-Traumatic Stress Disorder - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with PTSD:</b><i><br><a href="https://www.ptsd.va.gov/publications/print/understandingptsd_family_booklet.pdf" target="_blank">Understanding PTSD: A Guide for Family and Friends - Veteran Affairs</a><br><a href="https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/expert-answers/post-traumatic-stress/faq-20057756" target="_blank">Post-traumatic stress: How can you help your loved one? - Mayo Clinic</a><br><a href="https://psychcentral.com/ptsd/how-to-help-someone-with-ptsd" target="_blank">6 Ways to Help Someone with PTSD - Psych Central</a><br><a href="https://www.goodrx.com/conditions/ptsd/how-to-help-someone-with-ptsd" target="_blank">7 Ways to Help Someone With PTSD - GoodRx Health</a></i>';
}
 else if (message.toLowerCase().includes('did') ||
          message.toLowerCase().includes('dissociative') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Dissociative Identity Disorder or DID!<br><br>'
    + '<i>DID involves the presence of two or more different identities or personalities in one person. Each of these personalities has its own way of perceiving and interacting with the environment. People with DID experience changes in behavior, memory, perception, emotional response, and consciousness.</i><br><br>'
     + '<b>General symptoms of DID may include:</b> recurrent episodes of amnesia, or gaps in short- or long-term memory, including personal information, learned skills, or past traumatic events, intrusive thoughts, emotions, or impulses, fragmentation of identity, depersonalization, or feeling detached from your body and mind, derealization, or feeling detached from the world around you, & amnesia. <i><a href="https://psychcentral.com/health/dissociative-identity-disorder-symptoms#symptoms" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about DID:</b><i><br><a href="https://www.youtube.com/watch?v=LR7QEkU0IfQ" target="_blank">Youtube Video</a><br><a href="https://www.apa.org/news/podcasts/speaking-of-psychology/dissociative-identity-disorder" target="_blank">What is dissociative identity disorder? With Bethany Brand, PhD - APA</a><br><a href="https://www.verywellmind.com/dissociative-identity-disorder-425423" target="_blank">What Is DID? - VeryWellMind </a></i><br><br>'
    + '<b>Learn how to support someone with DID:</b><i><br><a href="https://www.therecoveryvillage.com/mental-health/dissociative-identity-disorder/how-to-help-a-friend-with-dissociative-identity-disorder/" target="_blank">How To Help a Friend With Dissociative Identity Disorder - Recovery Village</a><br><a href="https://namimi.org/mental-illness/dissociative-disorder/didfactsheet" target="_blank">DID Fact Sheet - NAMI</a><br><a href="https://www.healthyplace.com/blogs/dissociativeliving/2011/01/for-partners-living-with-dissociative-identity-disorder" target="_blank">Being an Ally: Tips For Partners Living with Dissociative Identity Disorder - Healthy Place</a><br><a href="https://www.youtube.com/watch?v=rlw1GqxncUk" target="_blank">15 WAYS To SUPPORT Someone With DID! - DissociaDID (Youtube)</a></i>';
}
  else if (message.toLowerCase().includes('anorexia') && message.toLowerCase().includes('learn')) {
 reply = 'I\'d be happy to help you learn more about Anorexia nervosa!<br><br>'
     + '<i>Anorexia nervosa is characterized by restricted food consumption that can lead to weight loss.</i><br><br>'
     + '<b>General symptoms of Anorexia nervosa may include:</b> Extreme weight loss or not making expected developmental weight gains, Fatigue, Dizziness or fainting, Hair that thins, breaks or falls out, Soft, downy hair covering the body, Absence of menstruation, Irregular heart rhythms, Eroded teeth and calluses on the knuckles from induced vomiting, Thin appearance, & Bluish discoloration of the fingers. <i><a href="https://www.mayoclinic.org/diseases-conditions/anorexia-nervosa/symptoms-causes/syc-20353591" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about Anorexia nervosa:</b><i><br><a href="https://www.youtube.com/watch?v=7Kb9t1Xxzqw" target="_blank">Youtube Video</a><br><a href="https://www.psychologytoday.com/us/conditions/anorexia-nervosa" target="_blank">Anorexia Nervosa - Psychology Today</a><br><a href="https://www.nationaleatingdisorders.org/learn/by-eating-disorder/anorexia" target="_blank">Anorexia Nervosa - NEDA </a></i><br><br>'
    + '<b>Learn how to support someone with Anorexia nervosa:</b><i><br><a href="https://www.youtube.com/watch?v=mHa57-fLCX0" target="_blank">How to Support Someone with Anorexia - Psych Hub (Youtube)</a><br><a href="https://www.nationaleatingdisorders.org/learn/help/caregivers/support" target="_blank">How to Support a Loved One with an Eating Disorder - NEDA</a><br><a href="https://www.nationaleatingdisorders.org/toolkit/parent-toolkit/how-to-talk-to-a-loved-one" target="_blank">How to Talk to a Loved One About an Eating Disorder - NEDA</a><br><a href="https://www.verywellmind.com/how-to-help-someone-with-an-eating-disorder-5088664" target="_blank">How to Help Someone With an Eating Disorder - VeryWellMind</a><br><a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Eating-Disorders/Support" target="_blank">Eating Disorders - NAMI</a></i>';
}
  else if (message.toLowerCase().includes('bulimia') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Bulimia nervosa!<br><br>'
     + '<i>Bulimia nervosa involves binge eating and then taking extreme steps to compensate for these binges.</i><br><br>'
    + '<b>General symptoms of Bulimia nervosa may include:</b> Being preoccupied with your body shape and weight, Living in fear of gaining weight, Repeated episodes of eating abnormally large amounts of food in one sitting, Forcing yourself to vomit or exercising too much to keep from gaining weight after bingeing, Using laxatives, diuretics or enemas after eating when they\'re not needed, & Fasting, restricting calories or avoiding certain foods between binges. <i><a href="https://www.mayoclinic.org/diseases-conditions/bulimia/symptoms-causes/syc-20353615" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about Bulimia nervosa:</b><i><br><a href="https://www.youtube.com/watch?v=hk0moXO7W74" target="_blank">Youtube Video</a><br><a href="https://www.nationaleatingdisorders.org/learn/by-eating-disorder/bulimia" target="_blank">Bulimia nervosa - NEDA</a><br><a href="https://my.clevelandclinic.org/health/diseases/9795-bulimia-nervosa" target="_blank">Bulimia Nervosa - Cleveland Clinic </a></i><br><br>'
    + '<b>Learn how to support someone with Bulimia nervosa:</b><i><br><a href="https://www.youtube.com/watch?v=R7ZpYmKMPXc" target="_blank">#LetsTalkAboutIt: How to Help Someone with an Eating Disorder - Psych Hub (Youtube)</a><br><a href="https://www.nationaleatingdisorders.org/learn/help/caregivers/support" target="_blank">How to Support a Loved One with an Eating Disorder - NEDA</a><br><a href="https://www.nationaleatingdisorders.org/toolkit/parent-toolkit/how-to-talk-to-a-loved-one" target="_blank">How to Talk to a Loved One About an Eating Disorder - NEDA</a><br><a href="https://www.verywellmind.com/how-to-help-someone-with-an-eating-disorder-5088664" target="_blank">How to Help Someone With an Eating Disorder - VeryWellMind</a><br><a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Eating-Disorders/Support" target="_blank">Eating Disorders - NAMI</a></i>';
}
  else if (message.toLowerCase().includes('binge') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Binge Eating Disorder or BED!<br><br>'
     + '<i>BED involves episodes of binge eating where the individual consumes an unusually large amount of food during a short time period, such as a couple of hours.</i><br><br>'
   + '<b>General symptoms of BED may include:</b> Feeling that your eating behavior is out of control, Eating even when you\re full or not hungry, Eating rapidly during binge episodes, Frequently eating alone or in secret, & Feeling depressed, disgusted, ashamed, guilty or upset about your eating. <i><a href="https://www.mayoclinic.org/diseases-conditions/binge-eating-disorder/symptoms-causes/syc-20353627" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about BED:</b><i><br><a href="https://www.youtube.com/watch?v=YPgRc0uzx5E" target="_blank">Youtube Video</a><br><a href="https://my.clevelandclinic.org/health/diseases/17652-binge-eating-disorder" target="_blank">Binge Eating Disorder - Cleveland Clinic</a><br><a href="https://www.mayoclinic.org/diseases-conditions/binge-eating-disorder/symptoms-causes/syc-20353627" target="_blank">Binge-eating disorder - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with BED:</b><i><br><a href="https://www.eatingdisorderhope.com/blog/how-support-loved-one-diagnosed-bed" target="_blank">How to Support Your Loved One Diagnosed with Binge Eating Disorder - HOPE</a><br><a href="https://www.nationaleatingdisorders.org/learn/help/caregivers/support" target="_blank">How to Support a Loved One with an Eating Disorder - NEDA</a><br><a href="https://www.nationaleatingdisorders.org/toolkit/parent-toolkit/how-to-talk-to-a-loved-one" target="_blank">How to Talk to a Loved One About an Eating Disorder - NEDA</a><br><a href="https://www.verywellmind.com/how-to-help-someone-with-an-eating-disorder-5088664" target="_blank">How to Help Someone With an Eating Disorder - VeryWellMind</a><br><a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Eating-Disorders/Support" target="_blank">Eating Disorders - NAMI</a></i>';
}
  else if (message.toLowerCase().includes('ocd') ||
          message.toLowerCase().includes('obsessive') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Obsessive-Compulsive Disorder or OCD!<br><br>'
   + '<i>OCD is characterized by experiencing obsessions, compulsions, or both, which significantly impact one\s functioning and day-to-day life.</i><br><br>'
  + '<b>General symptoms of OCD may include:</b> Obsessions (repeated, persistent and unwanted thoughts, urges or images that are intrusive and cause distress or anxiety) & Compulsions (repetitive behaviors that you feel driven to perform to reduce anxiety). <i><a href="https://www.mayoclinic.org/diseases-conditions/obsessive-compulsive-disorder/symptoms-causes/syc-20354432" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about OCD:</b><i><br><a href="https://www.youtube.com/watch?v=I8Jofzx_8p4" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder" target="_blank">What Is OCD? - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd" target="_blank">Obsessive-Compulsive Disorder - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with OCD:</b><i><br><a href="https://iocdf.org/expert-opinions/expert-opinion-family-guidelines/" target="_blank">Living With Someone Who Has OCD. Guidelines for Family Members - IOCDF</a><br><a href="https://iocdf.org/expert-opinions/expert-opinion-families-what-you-can-do-to-help/" target="_blank">Families: “What Can I Do to Help?” - IOCDF</a><br><a href="https://psychcentral.com/ocd/how-to-support-someone-with-ocd" target="_blank">How to Support a Loved One with OCD: 7 Ways - Psych Central</a><br><a href="https://beyondocd.org/information-for-friends-and-family/how-to-support-a-friend" target="_blank">How to Support A Friend - Beyond OCD</a></i>';
}
 else if (message.toLowerCase().includes('adhd') ||
          message.toLowerCase().includes('attention') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Attention-Deficit Hyperactivity Disorder or ADHD!<br><br>'
    + '<i>ADHD is characterized by a persistent pattern of hyperactivity and impulsivity and/or inattention that interferes with functioning and presents itself in two or more settings such as at home, work, school, and social situations. The DSM-5 specifies that symptoms must be present prior to age 12 and have a negative impact on social, occupational, or academic functioning.</i><br><br>'
    + '<b>General symptoms of ADHD may include:</b> Impulsiveness, Disorganization and problems prioritizing, Poor time management skills, Problems focusing on a task, Excessive activity or restlessness, Poor planning, Problems following through and completing tasks, Trouble coping with stress, & Frequent mood swings. <i><a href="https://www.mayoclinic.org/diseases-conditions/adult-adhd/symptoms-causes/syc-20350878" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about ADHD:</b><i><br><a href="https://www.youtube.com/watch?v=xMWtGozn5jU" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd" target="_blank">What is ADHD? - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" target="_blank">ADHD - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with ADHD:</b><i><br><a href="https://www.youngminds.org.uk/parent/parents-a-z-mental-health-guide/adhd/" target="_blank">Parents A-Z ADHD Guide - Young Minds</a><br><a href="https://www.theminiadhdcoach.com/adhd-awareness/adhd-support" target="_blank">Supporting Someone with ADHD - MiniADHDCoach</a><br><a href="https://psychcentral.com/adhd/suggestions-for-supporting-a-loved-one-with-adhd" target="_blank">How to Support Someone with ADHD - Psych Central</a><br><a href="https://www.additudemag.com/add-relationships-support-loved-one/" target="_blank">Are You Ready to Change? A Support Plan for Each Stage of ADHD Acceptance - ADDitude</a></i>';
}
  else if (message.toLowerCase().includes('asd') ||
          message.toLowerCase().includes('autism') && message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about Autism Spectrum Disorder or ASD!<br><br>'
    + '<i>ASD is typically characterized by persistent deficits in social interaction and communication in multiple life areas as well as restricted and repetitive patterns of behaviors. The DSM specifies that symptoms of ASD must be present during the early developmental period and that these symptoms must cause significant impairment in important areas of life.</i><br><br>'
     + '<b>General symptoms of ASD may include:</b> Has poor eye contact and lacks facial expression, Doesn\'t express emotions or feelings and appears unaware of others\' feelings, Has difficulty recognizing nonverbal cues (e.g., interpreting other people\'s facial expressions, body postures or tone of voice), Performs repetitive movements (e.g., rocking, spinning or hand flapping), Is unusually sensitive to light, sound or touch, yet may be indifferent to pain or temperature, & Fixates on an object or activity with abnormal intensity or focus. <i><a href="https://www.mayoclinic.org/diseases-conditions/autism-spectrum-disorder/symptoms-causes/syc-20352928" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about ASD:</b><i><br><a href="https://www.youtube.com/watch?v=FCejya1WWC8" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/autism/what-is-autism-spectrum-disorder" target="_blank">What is ASD? - APA</a><br><a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" target="_blank">ASD - NIMH </a></i><br><br>'
    + '<b>Learn how to support someone with ASD:</b><i><br><a href="https://www.poac.net/resources/fact-sheets/" target="_blank">ASD Fact Sheets - POAC</a><br><a href="https://www.milestones.org/get-started/for-community-at-large/interacting-with-autistic-people" target="_blank">Best Communication Practices for Interacting with Autistic People - Milestones</a><br><a href="https://psyche.co/guides/how-to-be-a-good-friend-to-an-autistic-person" target="_blank">How to be a good friend to an Autistic person - Psyche</a><br><a href="https://thespectrum.org.au/autism-strategy/autism-strategy-communication/" target="_blank">Autism communication strategies - The Spectrum</a></i>';
 }
 else if (
  (message.toLowerCase().includes('addict') ||
  message.toLowerCase().includes('substance') ||
  message.toLowerCase().includes('use') ||
  message.toLowerCase().includes('drug') ||
  message.toLowerCase().includes('alcohol')) &&
  message.toLowerCase().includes('learn')
) {
  reply = 'I\'d be happy to help you learn more about Substance-related disorders!<br><br>'
    + '<i>Substance-related disorders are those that involve the misuse of different substances such as cocaine, methamphetamine, opiates, and alcohol.</i><br><br>'
     + '<b>General symptoms of an Substance-related disorder  may include:</b> Feeling that you have to use the drug regularly, Having intense urges for the drug that block out any other thoughts, Over time, needing more of the drug to get the same effect, Spending money on the drug, even though you can\'t afford it, Not meeting obligations and work responsibilities because of drug use, Continuing to use the drug, even though you know it\'s causing problems in your life or causing harm & Experiencing withdrawal symptoms. <i><a href="https://www.mayoclinic.org/diseases-conditions/drug-addiction/symptoms-causes/syc-20365112" target="_blank">More</i></a><br><br>'
    + '<b>Find or learn more information about Substance-related disorders:</b><i><br><a href="https://www.youtube.com/watch?v=Hgn7MJjMfkk" target="_blank">Youtube Video</a><br><a href="https://www.psychiatry.org/patients-families/addiction-substance-use-disorders/what-is-a-substance-use-disorder" target="_blank">What Is a Substance Use Disorder? - APA</a><br><a href="https://www.nami.org/About-Mental-Illness/Common-with-Mental-Illness/Substance-Use-Disorders" target="_blank">Substance Use Disorders - NAMI</a></i><br><br>'
    + '<b>Learn how to support someone with ASD:</b><i><br><a href="https://www.samhsa.gov/find-support" target="_blank">Find Support - SAMHSA</a><br><a href="https://www.healthline.com/health/living-with-an-addict" target="_blank">How to Cope When Someone in Your Household Lives with Addiction - Healthline</a><br><a href="https://drugabuse.com/treatment/how-to-help-a-drug-addict/" target="_blank">Ways of Helping Someone With Drug or Alcohol Addiction - AAC</a><br><a href="https://www.mayoclinic.org/diseases-conditions/mental-illness/in-depth/intervention/art-20047451" target="_blank">Intervention: Help a loved one overcome addiction - Mayo Clinic</a></i>';
}
else if (message.toLowerCase().includes('learn')) {
  reply = 'I\'d be happy to help you learn more about psychological disorders!<br><br>' 
  + 'Try saying "I\'d like to learn about anxiety" or swap the word "anxiety" with another psychological disorder!<br><br>'
  + '<i>keyword(s): "learn"</i>'; }
   
   if (message.toLowerCase().includes('provider') || message.toLowerCase().includes('local')) {
  reply = 'I\'d be happy to help you find a mental health provider!<br><br>'
    + 'If you would like to search for providers in your area, please reply with "search".<br>'
    + 'If you would like to learn more about your health insurance coverage, please reply with "insurance".<br>'
    + 'If you would like general suggestions, please reply with "general".';
}
  
  if (message.toLowerCase().includes('search')) {
  reply = 'You can use these websites to help you look for local mental health care providers: <br><a href="https://www.zocdoc.com/" target="_blank">ZocDoc</a><br><a href="https://www.anthem.com/find-care/" target="_blank">Anthem</a><br><a href="https://findtreatment.gov/" target="_blank">SAMHSA Treatment Facility Finder</a><br><a href="https://www.psychologytoday.com/us/therapists" target="_blank">PsychologyToday</a>';
}
  
  if (message.toLowerCase().includes('insurance')) {
  reply = 'Generally, for any insurance it is a good idea to google the name of your insurance provider and "find a doctor" to get to an insurance website. Some insurance cards have the website listed on them. You can also call the member services number on your card and someone at the insurance company could provide a list of therapists as well—anyone can call their insurance anytime!<br><br>You can also use these websites to help you find out more about health insurance coverage, copay and more: <br><a href="https://www.healthcare.gov/health-care-law-protections/summary-of-benefits-and-coverage/" target="_blank">HealthCare.gov: Benefits & Coverage Summary</a><br><a href="https://www.cms.gov/CCIIO/Resources/Forms-Reports-and-Other-Resources/Downloads/Uniform-Glossary-01-2020.pdf" target="_blank">Health Coverage & Medical Term Glossary</a><br><a href="https://www.metlife.com/stories/benefits/insurance-card/" target="_blank">How to Read Insurance Card</a><br><a href="https://www.cigna.com/knowledge-center/copays-deductibles-coinsurance" target="_blank">Copays, Deductibles, & Coinsurance Explained</a>';
}
  
  if (message.toLowerCase().includes('general')) {
    reply = 'Here are some general suggestions for finding a provider & insurance:<br><br><b>1.</b> While searching for a provider, keep in mind that you can search for a different types of providers, including behavioral health, psychologist, & psychiatrists. <br><b>2.</b> Visit your insurance provider\'s website or call their customer service to learn more about your mental health coverage, benefits, and copay. Look for information on the specific services covered, in-network providers, and any limitations or requirements. <br><b>3.</b> Ask for recommendations from trusted friends, family, or healthcare professionals who have experience with mental health providers. They may be able to provide insights and suggestions based on their own experiences.<br><b>4.</b> Once you have a list of potential providers, reach out to them directly. Inquire about their availability, expertise, and whether they accept your insurance plan. It\'s also a good opportunity to ask questions about their approach to treatment and any specific concerns you may have. <br><b>5.</b> While speaking with the mental health provider, confirm that they accept your insurance plan and are considered in-network. Ask about the coverage for specific services, such as therapy sessions or psychiatric evaluations, and clarify any copays or out-of-pocket costs you might be responsible for. <br><b>6.</b> Familiarize yourself with the details of your insurance coverage, such as the number of covered sessions per year, any pre-authorization requirements, and the process for claims and reimbursements. This will help you make informed decisions and avoid unexpected costs. <br><b>7.</b> Utilize online directories like Zocdoc, Psychology Today, or your insurance provider\'s directory to find mental health providers in your area. Narrow down your search based on your preferences, such as location, specialty, or gender.';
  } 
  
  if ( (message.toLowerCase().includes('coping') ||
  message.toLowerCase().includes('cope') ||  
        message.toLowerCase().includes('strategies') ||  
        message.toLowerCase().includes('practices') ||
  message.toLowerCase().includes('self-care'))
) {
  const careWords = [
    'Prioritize restful sleep: Establish a consistent sleep schedule and create a relaxing bedtime routine. Aim for 7-9 hours of quality sleep each night, as sleep plays a vital role in mental health.',
    'Engage in physical activity: Regular exercise can have a positive impact on mental well-being. Find activities you enjoy, such as walking, yoga, dancing, or any form of exercise that suits your preferences and abilities.',
    'Practice relaxation techniques: Explore relaxation techniques like deep breathing exercises, meditation, mindfulness, or progressive muscle relaxation. These practices can help reduce stress, anxiety, and promote a sense of calm.',
    'Connect with others: Cultivate relationships with supportive and understanding people. Reach out to friends, family members, or join support groups where you can share your experiences and receive support. Connection and social support are crucial for mental well-being.',
    'Set boundaries: Learn to recognize and establish healthy boundaries in various areas of your life. This includes setting limits on work or study demands, learning to say "no" when necessary, and prioritizing time for self-care and activities that bring you joy.',
    'Practice self-compassion: Be kind and understanding toward yourself. Treat yourself with the same compassion and empathy you would show to a loved one. Practice positive self-talk and challenge self-critical thoughts.',
    'Limit exposure to stressors: Identify sources of stress in your life and explore ways to reduce or manage them. This might involve setting boundaries with work, reducing exposure to triggers, or seeking support to address specific stressors.'
  ];
  const randomIndex = Math.floor(Math.random() * careWords.length);
  reply = `Sure, here is a coping strategy or self-care practice you can try:<br><br>${careWords[randomIndex]}`;
}

if (message.toLowerCase().includes('encourage')) {
  const positiveWords = [
    'You are stronger than you realize. Each day you face these challenges, you demonstrate resilience and inner strength. Keep pushing forward, and know that you have the power to overcome.',
    'It\'s okay to not be okay. Remember that experiencing difficult emotions is a natural part of being human. Be kind to yourself and give yourself permission to feel and process your emotions at your own pace.',
    'You are deserving of support and understanding. Reach out to trusted friends, family members, or professionals who can offer a listening ear and support. You don\'t have to face this journey alone, and there are people who genuinely care about your well-being.',
    'Small steps forward matter. Celebrate every small victory along the way. Even the tiniest progress is a step towards healing and growth. Allow yourself to appreciate the progress you make, no matter how small it may seem.',
    'Your feelings are valid. Your experiences and emotions are real and should be acknowledged. It\'s essential to be gentle with yourself and recognize that your feelings matter. Give yourself permission to prioritize self-care and seek the help you need.',
    'This is just a chapter in your life, not the entire story. Difficult times do not define you. The challenges you face now will shape you, but they won\'t limit your potential or determine your future. Keep looking forward and remember that brighter days can lie ahead.',
    'You are worth fighting for. Your life has inherent value, and there are people who love and care about you. Even if it feels difficult right now, hold on to the belief that you are worthy of a happier and healthier life. Keep fighting, and don\'t give up on yourself.'
  ];
  const randomIndex = Math.floor(Math.random() * positiveWords.length);
reply = `Okay! Here are some words of encouragement:<br><br>${positiveWords[randomIndex]}`;
}

if (message.toLowerCase() === 'mindsupport') {
  reply = 'Hello! How can I assist you today?';
} else if (
  message.toLowerCase().includes('support') || //&& //&& means and
  (
    message.toLowerCase().includes('parent') ||
    message.toLowerCase().includes('teen') ||
    message.toLowerCase().includes('mom') ||
   message.toLowerCase().includes('dad') || 
    message.toLowerCase().includes('child') ||
    message.toLowerCase().includes('partner') ||
    message.toLowerCase().includes('girlfriend') ||
    message.toLowerCase().includes('boyfriend') ||
    message.toLowerCase().includes('son') ||
    message.toLowerCase().includes('daughter') ||
    message.toLowerCase().includes('kid') ||
    message.toLowerCase().includes('student') ||
    message.toLowerCase().includes('peer') ||
    message.toLowerCase().includes('loved one')
  )
) {
  const supportiveWords = ['Be present and listen: Create a safe and non-judgmental space for your loved one to express their feelings and thoughts. Be an attentive listener without interrupting or trying to offer immediate solutions. Sometimes, lending a compassionate ear can make a significant difference.','Educate yourself: Learn about the mental health condition your loved one is experiencing. This can help you understand their challenges better and offer informed support. Read reliable sources, attend support groups, or consult with mental health professionals for guidance.','Validate their experiences: Acknowledge and validate your loved one/s feelings. Let them know that their experiences are real and valid. Avoid dismissing or minimizing their struggles. Show empathy and understanding, even if you may not fully comprehend their situation.','Offer practical help: Help your loved one with practical tasks they may find overwhelming. This could involve assisting with household chores, running errands, or accompanying them to appointments. Offering concrete support can alleviate some of their stress and make them feel cared for.','Encourage professional help: Suggest seeking professional support and encourage your loved one to reach out to a mental health professional. Offer assistance in finding suitable resources, such as therapists, counselors, or support groups. Recognize that professional help can provide specialized care.','Be patient and understanding: Recovery takes time, and there may be ups and downs along the way. Practice patience and understanding. Avoid putting pressure on your loved one to "get better" quickly. Offer consistent support and let them know you/re there for them, regardless of their progress.','Maintain open communication: Foster open and honest communication with your loved one. Encourage them to share their thoughts, concerns, and needs. Regularly check in with them and let them know they can approach you anytime they need to talk.','Avoid judgment and stigma: Create a safe and non-stigmatizing environment for your loved one. Avoid labeling or judging them based on their mental health condition. Foster a supportive atmosphere where they feel accepted and understood.','Celebrate small victories: Acknowledge and celebrate the progress your loved one makes, no matter how small. Encouragement and positive reinforcement can inspire hope and motivate them to continue their journey towards better mental health.'];
  const randomIndex = Math.floor(Math.random() * supportiveWords.length);
  reply = `Supporting a loved one who is struggling with their mental health is crucial. Here is one way you can provide support:<br><br> ${supportiveWords[randomIndex]} <br><i>Additional links:<br><a href="https://www.psychiatry.org/patients-families/helping-a-loved-one-cope-with-mental-illness" target="_blank">APA, </a><a href="https://www.nami.org/Your-Journey/Family-Members-and-Caregivers/Learning-to-Help-Your-Child-and-Your-Family" target="_blank"> NAMI, </a><a href="https://www.samhsa.gov/mental-health/how-to-talk/friends-and-family-members" target="_blank">SAMHSA</i></a>`;
}
   if (message.toLowerCase().includes('crisis')) {
    reply = 'Here is what to do if a loved one is experiencing a mental health crisis:<br><b>If the situation is urgent or life threatening CALL 911 or your country\'s emergency number.</b><br><br><b><i>When calling for a mental health emergency:</b></i><br>-Say:<i> "My friend or loved one needs help for a mental health emergency. I would like to request an Crisis Intervention Team officer."</i><br>-Give your name, your friend or loved one\'s name, location, & describe the situation.<br>-You can ask the police to respond with or without lights or sirens.<br>-The officer might ask:<i> "Are there threats or acts of violence?" "Are there any weapons involved?" "Has there been a suicide attempt of has the person expressed thoughts or plans for suicide?"</i><br><br><b><i>While you wait for assistance:</b></i><br>-Say:<i> "You are not alone in this"</i> & stay with your friend/loved one.<br>-Listen without judgement. Talking is a positive step. Show that you care.<br>-Make it clear they\'re not in trouble.<br>-If they feel guilty or ashamed, say,<i> "Everyone needs help sometimes. You have nothing to be embarrassed about. Accepting help is a sign of strength and maturity."<\i>';
  }
  
  let chatboxReply = `
    <div class="chatbox-message-item received">
      <span class="chatbox-message-item-text">
        ${reply}
      </span>
      <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
    </div>
  `
  chatboxMessageWrapper.insertAdjacentHTML('beforeend', chatboxReply)
  scrollBottom()
}

function scrollBottom() {
  chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
  let text = value.replace(/\n/g, '')
  text = text.replace(/\s/g, '')

  return text.length > 0
}
