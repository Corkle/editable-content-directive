describe('makeEditable', function() {
    var scope, element, compiled;
    
    beforeEach(module("myApp"));
    beforeEach(module('edit-content.html'));
    beforeEach(inject(function($rootScope, $compile) {
        
        var html = "";
        html += "<div make-editable>";
        html += "Text Here";
        html += "</div>";
        
        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
        
    }));
    
    it('should initialize element that is not editable', function() {
       expect(element.find('div').attr('contenteditable')).toEqual('false'); 
    });
});