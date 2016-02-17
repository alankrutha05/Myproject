
         var app= angular.module('myapp');
         
         app.controller('BlogController', function($scope) {
            		
			var blogList= {
					test:'testing',
				blogs: [
				{
				name: 'Koti Reddy',
				image:'/images/1000.jpg',
				title: 'Sure shot way for Promotion',
				Description: 'I recently came across this article: Thanks Dad Advice on My First Day of Work.  It is a pretty useful article to help you grow in your career. '
				
				},
				
				{
				name: 'Sameet',
				image:'/images/1100.jpg',
				title: 'What your boss needs from you ?',
				Description: ' If you want to grow in the organization(or just be satisfied  that you have done your job to make your company successful),  just follow the rules mentioned in this article.   '
				
				},
				
				{
				name: 'Kanakaraj',
				image:'/images/kv.jpeg',
				title: 'User Experience Design',
				Description: ' Anyone who was keeping his/her  eyes and ears open  during Nov/Dec, would have heard about the death of Steve Jobs (even my  seven year old saw  Jobs’ photo on a magazine cover and commented, “Oh this is Steve Jobs. He died last month”'
				 
				}
				
				],
				comments: [
				{
					
					name:'Abc',
					description: 'Thanks for the links'
				},
				
				{
					
					name:'Senior guy',
					description: 'Good'
				}
				
				
				]
			
			
			};
			$scope.blogList= blogList;
			
            $scope.ascSort = function() {
                
                $scope.sortValue="name";

                
            }
            
            $scope.remSort = function() {
                
                $scope.sortValue = "";
            }
           /* $scope.descSort = function() {
               $scope.sortValue="name";
               $scope.reverse = "true";
            }*/
			$scope.submitBtn = function(){
				
					$scope.blogList.comments.push({name:$scope.Name, description:$scope.mycomment});
				}
           
           
            $scope.myBlogContent = "As always said , we should always keep learning new things. In today's world a new technology emerges almost everyday. We may not be able to learn or infact even know everything. But thanks to the open source stuff and a lot of news articles available we can get free access to many of these technologies.Then amongst the vast list of choice available you should go ahead and choose some topic that will help in your work, something that might make your life easier.Once you choose the topic , you now have the million dollar question :  Where do I start? Finally, once you feel that you have got good knowledge about the basics, my suggestion would be to start a small porject on your own. The best way to get a grip on something is to do it on your own. Think of a project,(it can be a basic one too!) and start working on it. You will now start exploring online for those small doubts thereby increasing your knowledge in that area. Post all this you can suggest your boss to use this technology in your future projects. And now that you are aware how it useful it is , you can explain your boss its advantages and make your work life a little peaceful.Hope the above few tips will help you in your next learning project.";
				
		 }
			
         );