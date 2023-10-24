const quotes = [
	{ 
		"quote" : "Hausawa is a term used to refer to the Hausa people, who are one of the largest ethnic groups in Africa, primarily located in Nigeria, Niger, Ghana Sudan, Burkinafaso, and other African countries",
		"source" : "Yusuf Muhammad Kawu" 
	},
	{
		"quote" : "The Hausa language, also known as Hausa, is one of the most widely spoken languages in Africa, with over 70 million native speakers", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "The Hausa people have a rich cultural heritage, known for their traditional music, dance, and storytelling. They are also skilled artisans, known for their intricate weaving, pottery, and leatherwork", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "Hausa society is traditionally organized into a hierarchical system, with a strong emphasis on respect for elders and community values. The traditional ruler, known as the Sarki, holds significant authority and is highly respected", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "Hausa cuisine is diverse and flavorful, with popular dishes including tuwon shinkafa (rice pudding), miyan kuka (baobab leaf soup), and tsire or suya (grilled meat skewers)", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "The Hausa people have a long history of trade, with the ancient city of Kano in Nigeria serving as a major trading hub in West Africa. Today, Kano is still known for its bustling markets and vibrant commercial activities", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "Hausa literature has a rich tradition, with oral storytelling being an important part of their cultural heritage. In recent years, Hausa literature has also gained recognition through written works and films", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "Hausa society is predominantly Muslim, with Islam being a central aspect of their culture and daily life. Mosques are important community centers, and Islamic festivals, such as Eid al-Fitr and Eid al-Adha, are widely celebrated. Sizeable Hausa christians and Hausa traditionalists are also found in major Hausa society", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "The Hausa people have a strong sense of community and hospitality, often welcoming visitors with open arms. They are known for their warm and friendly nature, making them popular hosts and travel destinations", 
		"source" : "Yusuf Muhammad Kawu"
	},
	{
		"quote" : "The Hausa people have made significant contributions to the fields of education, politics, and entertainment. Many Hausa individuals have excelled in various professions, including medicine, law, and music", 
		"source" : "Yusuf Muhammad Kawu"
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)