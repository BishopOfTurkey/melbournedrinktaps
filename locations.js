var locations = [
  {
    name: "Fleming Park",
    s: -37.770033,
    e: 144.976990,
    rating: 6,
    description: "",
    image: "images/taps/flemingparkplayground.jpg"
  },
  {
    name: "Swanston Street and Little Bourke Street",
    s: -37.812321,
    e: 144.965152,
    rating: 5.5,
    description: "",
    image: "images/taps/swanstonlittlebourke.jpg"
  },
  {
    name: "Royal Park Tennis Club Court 2",
    description: "Strong and cold, great tap",
    s: -37.778101,
    e: 144.958726,
    rating: 9,
    image: "images/taps/royalparktennis.jpg"
  },
  {
    name: "warr park",
    description: "Not very good",
    s: -37.760273,
    e: 144.964462,
    rating: 5,
    image: "images/taps/warrpark.jpg"
  },
  {
    name: "Hardy Gallagher Reserve",
    description: "Good tap",
    s: -37.779167,
    e: 144.966678,
    rating: 7,
    image: "images/taps/hardygallagherreserve.jpg"
  },
  {
    name: "Bourke Street Mall, Outside David Jones",
    description: "Pretty Good",
    s: -37.813807,
    e: 144.964478,
    rating: 7.5,
    image: "images/taps/bourkestreetdavidjones.jpg"
  },
  {
    name: "Corner of Bourke and Russel Street",
    description: "Acceptable",
    s: -37.812658,
    e: 144.968360,
    rating: 6,
    image: "images/taps/bourkerussel.jpg"
  },
  {
    name: "Swanston and Little Lonsdale Street",
    description: "Great tap",
    s: -37.810444,
    e: 144.964330,
    rating: 8,
    image: "images/taps/littlelonsdaleswanston.jpg"
  },
  {
    name: "Catani Gardens",
    description: "Solid",
    s: -37.861952,
    e: 144.971901,
    rating: 8,
    image: "images/taps/catanigardens.jpg"
  },
  {
    name: "Elizabeth and Lonsdale Street",
    description: "Meh",
    s: -37.812108,
    e: 144.962430,
    rating: 5.5,
    image: "images/taps/elizabethlonsdale.jpg"
  },
  {
    name: "Princes Hill Secondary Collage, by basketball court",
    description: "all ratings from front to back: 7/10, 9/10, 7/10, 4/10, 5/10, 9/10",
    s: -37.783043,
    e: 144.965070,
    rating: 7.5,
    image: "images/taps/phsc.jpg"
  },
  {
    name: "Strathmore Tennis Club",
    description: "Taps on tennis courts ussually never fail to dissapoint. This tap is no exception",
    s: -37.733799,
    e: 144.919848,
    rating: 8,
    image: "images/taps/strathmoretennis.jpg"
  },
  {
    name: "Fleming Park, next to car park",
    description: "Great tap",
    s: -37.769536,
    e: 144.974779,
    rating: 8.5,
    image: "images/taps/flemingpark2.jpg"
  },
  {
    name: "Bridges Reserve",
    description: "Great Tap",
    s: -37.741747,
    e: 144.968502,
    rating: 8,
    image: "images/taps/bridgesreserve.jpg"
  },
  {
    name: "Royal Park, next to cricket ground and gold course",
    description: "Overall pretty solid tap",
    s: -37.781447,
    e: 144.955880,
    rating: 8,
    image: "images/taps/royalparkcricketgolf.jpg"
  },
  {
    name: "Flinders Street and Swanston Street",
    description: "little akward to hold the button and drink but still not bad",
    s: -37.817740,
    e: 144.966872,
    rating: 7,
    image: "images/taps/flindersswanston.jpg"
  },
  {
    name: "Queen Street and Bourke Street",
    description: "Not bad but is a little akward to drink from althouh it has a bottle refill which is good. pretty decent",
    s: -37.814929,
    e: 144.960420,
    rating: 7.5,
    image: "images/taps/queenbourke.jpg"
  },
  {
    name: "Center of Federation Square",
    description: "Great tap and perfect spot to watch the tv from",
    s: -37.818012,
    e: 144.968437,
    rating: 9,
    image: "images/taps/fedsquare.jpg"
  },
  {
    name: "Wilson Avenue",
    description: "A bit low but has a bottle refill. Good taste and water pressure",
    s: -37.775148,
    e: 144.960497,
    rating: 8,
    image: "images/taps/wilsonavenue.jpg"
  },
  {
    name: "Princes Street and Lygon Street",
    description: "ok",
    s: -37.792835,
    e: 144.968409,
    rating: 6,
    image: "images/taps/princeslygon.jpg"
  },
  {
    name: "McCleery Reserve",
    description: "A bit low to the ground. The water pressure wass spot on but it tasted like dog balls.",
    s: -37.743823,
    e: 144.955932,
    rating: 4.5,
    image: "images/taps/mccleeryreserve.jpg"
  },
  {
    name: "Barkley Street Park",
    description: "No water at all. Ffs. Why do I live.",
    s: -37.776205,
    e: 144.965391,
    rating: 0,
    image: "images/taps/barkleystreetpark.jpg"
  },
  {
    name: "Princes Park, next to pond",
    description: "Taste not the best in the world but everythingelse (water pressure, look and location) is great",
    s: -37.778623,
    e: 144.961703,
    rating: 7.5,
    image: "images/taps/princesparkpond.jpg"
  },
  {
    name: "Princes Walk next to Federation Square",
    description: "Great spot (with a good view) but the water pressure is horrible",
    s: -37.818576,
    e: 144.969744,
    rating: 2,
    image: "images/taps/princeswalkfedsquare.jpg"
  },
  {
    name: "Princes Park close to Tram Stop and Carlton FC",
    description: "The taste is a little strange and the water comes out on a bit of an angle. The pressure is pretty good.",
    s: -37.784684,
    e: 144.960304,
    rating: 5.5,
    image: "images/taps/princesparktramcarltonfc.jpg"
  },
  {
    name: "Princes Park next to Carlton FC",
    description: "Good location but the pressure was ridiculously high",
    s: -37.784906,
    e: 144.962571,
    rating: 1,
    image: "images/taps/princesparksprinkler.jpg"
  },
  {
    name: "Bourke Street Mall next to Myer",
    description: "All around a really great tap. Strange after taste but pretty good arc and pressure.",
    s: -37.813869,
    e: 144.964213,
    rating: 8,
    image: "images/taps/bourkestreetmyer.jpg"
  },
  {
    name: "Brunswick Baths",
    description: "Excellent water pressure, great temperature, excellent position after a workout",
    s: -37.771109,
    e: 144.959640,
    rating: 10,
    image: "images/taps/brunswickbaths.jpg"
  },
  {
    name: "Reynold's Reserve",
    description: "Solid tap, espiecially for a stop while your jogging around the park. Water pressure is very good and taste is solid, although a bit warm and takes too long to cool down, but all good apart from that",
    s: -37.783640,
    e: 144.960002,
    rating: 7,
    image: "images/taps/reynoldsreserve.jpg"
  },
  {
    name: "Brunswick South-West Primary School",
    description: "Ratings from furtherst to closest: 7.5/10, 6.5/10, 5.5/10. OVerall the taps were okay, the furthest tap had pretty good pressure, the middle tap had okay pressure and the closest had very bad pressure. All of them had a slight metalic taste which wasn't great",
    s: -37.770585,
    e: 144.943168,
    rating: 6.5,
    image: "images/taps/bswps.jpg"
  },
  {
    name: "Royal Park, Next to tram stop",
    description: "Great temperature (nice and cold). The taste was good and clean but the pressure was dissapointing. It also had a bottle refill which is always good to see. Really Great tap",
    s: -37.780738,
    e: 144.951089,
    rating: 8.5,
    image: "images/taps/royalparktram.jpg"
  },
  {
    name: "Princes Park Playground",
    description: "OMG BEST MOMENT OF MY LIFE!!! COLF AF, PERFECT WATER PRESSURE, LOOKS GREAT, GOOD LOCATION, ALL IN ALL AMAZING TAP!!!!",
    s: -37.785142,
    e: 144.962975,
    rating: 10,
    image: "images/taps/princesparkplayground.jpg"
  },
  {
    name: "Along the Yarra River next to Train Station Platforms",
    description: "horrible tap, the water sprays in the wrong direction and the taste is awful",
    s: -37.819323,
    e: 144.964474,
    rating: 2,
    image: "images/taps/yarratrain.jpg"
  },
  {
    name: "Yarra River next to Train Station Platforms",
    description: "Pretty good but the taste is slighty off",
    s: -37.820173,
    e: 144.960630,
    rating: 7,
    image: "images/taps/yarra2.jpg"
  },
  {
    name: "A'Beckett Street, Next to RMIT Outdoor Basketball Courts",
    description: "Pressure is a little firceful but taste, look and location are great. Very helpful if you've just had an intense game. Also has two drink bottle refills that both work to the highest degree",
    s: -37.808685,
    e: 144.962733,
    rating: 9.5,
    image: "images/taps/abeckett.png"
  },
  {
    name: "Edinburgh Gardens, across from basketball court",
    description: "This tap is truly one of my closest acquaintances, it has great taste, temperature, pressure and arc. And as you can see, even that dog is enjoying it",
    s: -37.788320,
    e: 144.983773,
    rating: 9,
    image: "images/taps/edinburghbball.jpg"
  },
  {
    name: "Coburg Lake, by the dam wall",
    description: "Amazing tap. The water pressure creates a perfect arch, the water is cool and tastes good. Nice location and the tap looks pretty good",
    s: -37.734419,
    e: 144.971871,
    rating: 9.5,
    image: "images/taps/coburglake.jpg"
  },
  {
    name: "Bike path between St Georges Road and Nicholson Street",
    description: "Great aesthetic solid bluestone construction. Poor pressure and OK taste. However there are too many ants for a comfortable drinking experience. Also important to note that the tap is not easily accessible by a person on a bike.",
    s: -37.780767,
    e: 144.983239,
    rating: 3.5,
    image: "images/taps/bikegeorgesnicholson.jpg"
  },
  {
    name: "Queens Park",
    description: "Ok location next to playgound and pond but the button was hard to press and you had t pound it. shit tap.",
    s: -37.762084,
    e: 144.922553,
    rating: 4,
    image: "images/taps/queenspark.jpg"
  },
  {
    name: "Loreto John York Park",
    description: "Good water flow, decent look and location. Only problem is a bit of a strange taste",
    s: -37.757900,
    e: 144.974319,
    rating: 7,
    image: "images/taps/loretojohnyorkpark.jpg"
  },
  {
    name: "Lygon Street and The Potter",
    description: "The pressure was fairly good, enough to have a good drink but not the ideal pressure. The taste was pretty solid and very refreshing",
    s: -37.797004,
    e: 144.967197,
    rating: 7,
    image: "images/taps/lygonthepotter.jpg"
  },
  {
    name: "Clayton Reserve",
    description: "The water pressure was good. The tap was easy to drink from and it also has the added function of providing left over water for dogs. The taste was alright but unfortunatley it was next to a bin. However, the fact that it's in a dog park gives it a higher rating",
    s: -37.796919,
    e: 144.938947,
    rating: 8,
    image: "images/taps/claytonreserve.jpg"
  },
  {
    name: "Corner of Williams and Little Collins Street",
    description: "Great pressure, good arch and good taste. Tiniest bit of an after taste but all over great",
    s: -37.816546,
    e: 144.958498,
    rating: 9,
    image: "images/taps/williamslittlecollins.jpg"
  },
  {
    name: "Corner of Nicholson and Richardson",
    description: "Have to say, not a great tap. Water pressure and flow was honestly very poor and it was not a comfortable drinking experience. Also the water tastes a little funny and I'm coincidentally sick right now.",
    s: -37.785033,
    e: 144.977079,
    rating: 2,
    image: "images/taps/nicholsonrichardson.jpg"
  },
  {
    name: "McKillop Street",
    description: "I'm honestly quite confused with this tap. Apart from the fact that it sometimes works and sometimes doesn't, it's just a very strange spot for a tap and feels awkward where it is",
    s: -37.81527,
    e: 144.961756,
    rating: 3,
    image: "images/taps/mckillopstreet.jpg"
  },
  {
    name: "A park off Park Street",
    description: "Good taste, design and location but the pressure is terrible. his tap spurts water more then 2 metres in the air which got me a bit wet which pissed me off. This intense pressure made it almost impossible to drink from this tap and that is not what we want.",
    s: -37.779748,
    e: 144.977092,
    rating: 4,
    image: "images/taps/parkoffparkstreet.jpg"
  },
  {
    name: "Jones Park",
    description: "Good temprature and location. I'm satisfied with the water pressure",
    s: -37.762071,
    e: 144.979886,
    rating: 7.5,
    image: "images/taps/jonespark.jpg"
  },
  {
    name: "Queen Victoria Market, Victoria Street",
    description: "This tap was nothing special. The pressure, taste and design were all pretty standard. The location was nice and it had a bottle refill that's a pls. All around okay",
    s: -37.806261,
    e: 144.958059,
    rating: 7,
    image: "images/taps/vicmarketvicstreet.jpg"
  },
  {
    name: "Edinburgh Gardens behind Bowling Club",
    description: "Bad pressure, not great temperature and okay taste. We didn't exactly get out on the fight foot, even the knob was uncomfortable to turn. But cool decoration!",
    s: -37.788036,
    e: 144.981368,
    rating: 5,
    image: "images/taps/edinburghbowls.jpg"
  },
  {
    name: "Edinburgh Gardens next to playground",
    description: "Solid tap, decent temperature and pressure and nice taste. however can ussually be found with dirt or other things lying on it.",
    s: -37.785965,
    e: 144.982815,
    rating: 7,
    image: "images/taps/edinburghplayground.jpg"
  },
  {
    name: "Victorian Parliament House",
    description: "Pretty darn good. Small but strong stream of water, very good taste and extremely cool.",
    s: -37.811017,
    e: 144.973765,
    rating: 8.5,
    image: "images/taps/vicparliament.jpg"
  },
  {
    name: "Queensbridge Street next to the Yarra River",
    description: "Doesn't work at all. dissapointing",
    s: -37.820977,
    e: 144.961745,
    rating: 0,
    image: "images/taps/queensbridgestreet.jpg"
  },
  {
    name: "Edinburgh Gardens near Alfred Crescent",
    description: "Initially, water pressure was way too high. However, with some finessing, I was able to press the button just enough to have a lovely arc. So after the beginning hurdle, the pressure was great and the taste and temperature were excellent.",
    s: -37.785614,
    e: 144.982522,
    rating: 8.5,
    image: "images/taps/edinburghalfredcrescent.jpg"
  },
  {
    name: "Opposite the Immigration Museum on Flinders",
    description: "First things first, the taste was not great, quite weird. It was cold, had good pressure and great control with the button. How much ou pushed on the button determined the water flow, an excellent feature. Pretty good tap",
    s: -37.819536,
    e: 144.960645,
    rating: 7,
    image: "images/taps/flindersimmigration.jpg"
  },
  {
    name: "Princes Park Playground (next to barbeques)",
    description: "An all-around decent tap, great pressure and design. Water flows well but it has a slightly salty after taste. As well as it being a decent tap it includes a bottle refill which is quite usefull",
    s: -37.784926,
    e: 144.962413,
    rating: 8,
    image: "images/taps/princesparkplaygroundbbq.jpg"
  },
  {
    name: "Altona Dog Beach",
    description: "Sadly, this is another tap that disappointed us. It was a bleak, gusty, overcast day in Altona when we found this tap. Hours had just been spent frolicking on the cold, sandy beach. For so long we had enjoyed uninterrupted fun, making the most of this undesirable weather. But when the time came that we started to feel dehydrated and longed for the sweet, sweet water from a fine drink tap, we only found this joke of a tap.<br><br>On first sight, the tap looked to be fine, perhaps a little old but that did not matter. however, when we moved our faces towards the spout that promised us the water that we needed so dearly, and our fingers made contact with the lifeless button of lies, the water we received was not what we were looking for at all.<br><br>Water sprayed out of the tap, hitting anyone that would try to drink from it in the face, then the pressure would die down to the point of being barely drinkable, only to power up and spray us in the face a few seconds later. The tap was playing mind games with us. When it was turned on it could be heard rattling, laughing at us. The taste of the water was nothing special either, there are no words to describe it, the taste was just wrong.<br><br>After encounters with this tap, anyone would rather run over to the beach, only metres away, and drink from the ocean.<br><br>A truly terrible tap.",
    s: -37.863941,
    e: 144.850090,
    rating: 4,
    image: "images/taps/altonadogbeach.jpg"
  },
  {
    name: "Gertrude Street and Fitzroy Street",
    description: "No word describes this tap better then 'solid'. cool and refreshing, tastes likes water out of the fridge, good location, keeping people walking down Gertrude Street hydrated. Nice modern design. No bottle refill though.",
    s: -37.805660,
    e: 144.975774,
    rating: 9,
    image: "images/taps/gertrudefitzroy.jpg"
  },
  {
    name: "Carlton Gardens next to tennis courts",
    description: "Decent taste but flow was awful. Sprayed towards the left making it hard to drink from. Would give an awful score but it had a dog bowl for a nice touch.",
    s: -37.802647,
    e: 144.972935,
    rating: 4,
    image: "images/taps/carltongardenstennnis.jpg"
  },
  {
    name: "Carlton Gardens, close to Rathdowne Street",
    description: "Extremely low pressure to the point that I cant rate the taste.",
    s: -37.801269,
    e: 144.970438,
    rating: 3,
    image: "images/taps/carltonrathdowne.jpg"
  },

  {
    name: "Edinburgh Gardens in playground near Alfred Crescent",
    description: "Always seems to get off to a sputtering start. However the taste is decent and the pressure is not very good. The arch is quite low and there is often dirty.",
    s: -37.789174,
    e: 144.983843,
    rating: 5,
    image: "images/taps/edinburghinplayground.jpg"
  },
  {
    name: "Edinburgh Gardens next to WT Peterson Oval",
    description: "Very good pressure, not great temperature, pretty good taste and arch",
    s: -37.789590,
    e: 144.981823,
    rating: 7.5,
    image: "images/taps/edinburghwt.jpg"
  },
  {
    name: "South Melbourne Beach",
    description: "Good tap, decent everything and a bottle refill.",
    s: -37.848023,
    e: 144.948547,
    rating: 8,
    image: "images/taps/southmelbbeach.jpg"
  },
  {
    name: "Fitzroy Gardens",
    description: "Share a moment with your four-legged friend while overlooking the beautiful cbd with this genius invention that catches all the water you don't catch for your fury friend. Water pressure is in the solid range but a couple of extra bar wouldn't hurt. Would visit again.",
    s: -37.810483,
    e: 144.981019,
    rating: 8,
    image: "images/taps/fitzroygardens.jpg"
  },
  {
    name: "Melbourne University Enviromental Office",
    description: "I must say that this tap (as well as most of the taps at Melbourne Uni) was extremely average. The taste was very bland and the temperature was about as mild as you can get, on top of that the button was very satisfying to press. Although it did have a drink bottle refill which adds to the final score. step of your game Melbourne University, especially as you claim to be one of the best, if not the best university in Australia.",
    s: -37.798588,
    e: 144.961912,
    rating: 4,
    image: "images/taps/muenvirooffice.jpg"
  },
  {
    name: "Royal Park, next to AFL ovals",
    description: "Overall, the tap was alright. Had fine taste and temperature but on the down side it had overly powerful pressure. Other then that, no problems.",
    s: -37.777298,
    e: 144.953084,
    rating: 7.5,
    image: "images/taps/royalparkaflovals.jpg"
  },
  {
    name: "Phillips Reserve by BBQ",
    description: "Good taste good flow. Felt the tiniest bit warm so I took of a point. Drainable dog bowl is a nice touch",
    s: -37.770093,
    e: 144.983339,
    rating: 9,
    image: "images/taps/phillipsreserveplay.jpg"
  },
  {
    name: "Phillips Reserve next to Vitoria Street",
    description: "Under the shade of a large peppercorn tree, for peaceful drinking. Very nice and cold. Good pressure but the taste was just a little off.",
    s: -37.769435,
    e: 144.983516,
    rating: 9,
    image: "images/taps/phillipsreserveroad.jpg"
  },
  {
    name: "Merri Park",
    description: "Weird tap. Rusty generally nasty look with a broken lip guard. Very cold and has good pressure. which is good but the taste is fowl",
    s: -37.772029,
    e: 144.987857,
    rating: 5,
    image: "images/taps/merripark.jpg"
  },
  {
    name: "Sumner Park",
    description: "Great pressure temperature and good taste. Nice location.",
    s: -37.774230,
    e: 144.985898,
    rating: 9,
    image: "images/taps/sumnerpark.jpg"
  },
  {
    name: "Merri Creek trail, next to the esplanade",
    description: "Really really really great tap. Perfect location, after an extremely steep hill on the merri Creek trail, amazing pressure, strong but not too strong. Really nice and cold, and last of all an all round great taste.",
    s: -37.785616,
    e: 145.004606,
    rating: 10,
    image: "images/taps/merritrailesplande.jpg"
  },
  {
    name: "Quarries Park",
    description: "Average tap, nothing special. Pressure was a bit too strong but it had good taste, good location and cold water.",
    s: -37.790462,
    e: 145.003664,
    rating: 7,
    image: "images/taps/quarriespark.jpg"
  },
  {
    name: "Dights Falls Reserve",
    description: "Decent pressure, decent taste, decent flow and decent temperature. Decent tap.",
    s: -37.796241,
    e: 145.000619,
    rating: 8,
    image: "images/taps/dightsfalls.jpg"
  },
  {
    name: "Collingwood Children's Farm",
    description: "TERRIBLE! Tastes really bad, sprays up in a thin sharp stream. Cold.",
    s: -37.801778,
    e: 145.005179,
    rating: 2,
    image: "images/taps/collingwoodchildfarm.jpg"
  },
  {
    name: "Andrews Reserve Trail",
    description: "Good, strong pressure. Easily accessible by bikes which is always good on a bike path. The water was cold but unfortunetly there was an unpleasant mettalic, rusty after taste ",
    s: -37.808853,
    e: 145.010131,
    rating: 8,
    image: "images/taps/andrewsreservetrail.jpg"
  },
  {
    name: "Richmond Park",
    description: "Acceptable Tap. Good taste and quite cold, however the flow slipped below the lip guard frequently",
    s: -37.819528,
    e: 145.014624,
    rating: 7,
    image: "images/taps/richmondpark.jpg"
  },
  {
    name: "Yarra Boulevard",
    description: "Great taste, decent pressure and fairly cold. Good Location",
    s: -37.833229,
    e: 144.022781,
    rating: 8,
    image: "images/taps/yaarablv.jpg"
  },
  {
    name: "Redgum Gulley",
    description: "Nothing special. Ok taste and pressure on both sides",
    s: -37.818931,
    e: 144.973026,
    rating: 6.5,
    image: "images/taps/redgumgulley.jpg"
  }
]
