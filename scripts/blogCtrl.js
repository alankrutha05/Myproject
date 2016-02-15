
         var app= angular.module('myapp', []);
         
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
                $scope.reverse="false";
                
            }
            
            $scope.remSort = function() {
                
                $scope.sortValue = "";
            }
            $scope.descSort = function() {
               $scope.sortValue="name";
               $scope.reverse = "true";
            }
			$scope.submitBtn = function(){
				
					$scope.blogList.comments.push({name:$scope.Name, description:$scope.mycomment});
				}
           
            
				
		 }
			
         );