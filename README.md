#Project structure#
პროექტის სტრუქტურა გამოიყურება შემდეგნაირად:
პროექტის ირგვლივ სამუშაო გარემო თავმოყრილია src ფოლდერში,რომელიც შედგება შემდეგი ნაწილებისგან:
1.assets:
ამ ფოლდერში მოცემულია ის ფოტომასალა,რომელიც გამოყენებულია პროექტში.
2.components:
აქ გხვდება სამი ნაწილი.ესენია navbar,sections,slider.
navbar ფოლდერში არის ის ფაილები რომელიც ამ საიტის ნავიგაციის კომპონენტის ნაწილია.ესენია navbar.jsx, სადაც დაწერილი კოდიკ განსკუთვნილია საიტის ფართო ეკრანისთვის ანუ ძირიტადი ნაწილი,ხოლო დანარჩენი ორი რესპონიული ნაწილებისთვის(mobile)
slider ფოლდერში განთავსებულია საიტის ერთ-ერთი ნაწილის ასაწყობად განკუთვნილი კოდი.
sections ფოლდერში კი საიტის ძირითადი ფეიჯებია განთავსებულია.
3.hooks:
აქ არის ფუნქცია რომელიც გამოყენებულია პროექტში.
4.utils:
ამ ფოლდერში არის ფუნქცია რომელიც ფართოდაა გამოყენებული პროექტში,კერძოდ გვეხმარება რათა საიტი იყოს responsive.
#Technologies inside Project#
პროექტი აწყობილია React. მისი გამოყენება მოსახერხებელია,მეტად გასაგები და კომფურტული გარემოა js კოდის დასაწერად.
პროექტში გამოყენებულია styled-components,css დაწერა პირადად ჩემთვის ბევრად მარტივია ასევე კოდს ხდის ბევრად გასაგებს და მარტივად წასაკითხს.
fontawesome გამოყენებულია დახვეწილი აიქონების გამოსაყენებლად. მისი ჩატვირტვა და შემდეგ დაწერა ასევე მარტივი და გასაგებია.

#DEPLOYMENT#
NPM run build. რომელის ქმნის build directory with a production build of your app. შემდეგ ვიყენებთ სასურველ HOISTING პლატფორმას რომელიც ჩემს შემთხვევაში არის NETLIFY. BUILD ფაილს ვტვირტავთ სასურველ პლატფორმაზე.
