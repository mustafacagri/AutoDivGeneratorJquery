# AutoDivGeneratorJquery
Auto Div Generator w/ jQuery &amp; Bootstrap &amp; Font Awesome

AutoDivGeneratorJquery is a structure that allows you to create divs in a simple way.
You can create Bootstrap boxes with this example. In fact, it is somewhat similar to Bootstrap's card structure. But the most important differences are that you can use Font Awesome icons in the card headers and you can get data from remote URLs and use them automatically in these boxes.

I usually take note of which fields I will use more than once before starting projects. Afterwards, I proceed quickly thanks to tiny "generators". Because here, by just changing the "generator's" file, I can easily change the fields I have used more than 100 times. I am sharing this tiny and *beginner level generator* for example.

![alt text](https://www.mustafacagri.com/wp-content/uploads/2020/10/Auto-Div-Generator-w-jQuery-Bootstrap-Font-Awesome-1.png "Auto Div Generator w jQuery & Bootstrap & Font Awesome")

## Data Attributes
` data-from-url ` It is the address of the URL from which you will provide the data. The content in the URL must be of file type Json.
 Example content of file or URL:
 ```
 "This is the text coming from test2.json!"
 ```
 
 ` data-icon ` Font Awesome class names of icons. ***Example: fas fa-city***
 
 ` data-title ` Title of your header's text ***Example: My Beautiful Title***
 
 ` data-title-align ` Which way do you want your header's title to align? ***Options: left, right, justify***
 
 ` data-content-align ` Which way do you want your content to align? ***Options: left, right, justify ***
 
 
 ` data-shadow-bg ` If we want to use an icon that looks like a shadow in the content area of ​​the box, we can fill this area as well. If we define it and leave it blank, the icon we use in the title will also appear here. ***Example: fas fa-business-time***

The select2generator that I shared earlier had used this structure similarly. You might look at the picture below.

![alt text](http://code.mustafacagri.com/select2generator/ss/ss-min.png "Select2 Generator From Json")
 
## Sample Usage
If you want to see what AutoDivGeneratorJquery looks like, you could visit http://code.mustafacagri.com/AutoDivGeneratorJquery.
