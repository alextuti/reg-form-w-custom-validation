
document.addEventListener('DOMContentLoaded', function(event){
    var ruleNames=[];
    var forEach=Array.prototype.forEach;
    
    // Storing all the data-rules inside the array ruleNames
    var ruleElements=document.querySelectorAll('span[data-rule]');
    forEach.call(ruleElements, function(element){
        ruleName=element.getAttribute('data-rule');
        if(ruleNames.indexOf(ruleName) < 0){
            ruleNames.push(ruleName);
        }
    });
    
   
    // The custom validation is shown for the invalid elements through
    // this function.
    var validationFail= function(e){
        var element, validity;
        element=e.currentTarget;
        validity=element.validity;

        if(!validity.valid){
            ruleNames.forEach(function(ruleName){
                checkRule(validity, ruleName, element);
            });
            e.preventDefault();
        }

    };
    
    // Function that validates the valid/ onblur elements
    var validate= function(){
        messageElements=document.querySelectorAll('.validation-messages span');
        forEach.call(messageElements, function(element){
            element.classList.add('hide');
        });
        document.getElementById('registration-form').checkValidity();
    };
    var checkRule= function(state, ruleName, element){
        if(state[ruleName]){
            
            var rules= element.nextElementSibling.querySelectorAll('[data-rule="' + ruleName + '"]');
            forEach.call(rules, function(rule){
                rule.classList.remove('hide');
            });
        }

    };
    // Assigning the validate function to 'onblur' inputs and the validationFail
    // to 'oninvalid' elements 
    var inputElements=document.querySelectorAll('input:not(button)');
    forEach.call(inputElements, function(input){
        input.oninvalid=validationFail;
        input.onblur=validate;
    });
});

// The counter for the "Work experience" range value
var rangeWorkExperience=document.getElementById("work-experience") 
    rangeWorkExperienceOutput=document.getElementById("work-experience-output");

rangeWorkExperienceOutput.innerHTML=rangeWorkExperience.value;

rangeWorkExperience.addEventListener('input', function(){
    rangeWorkExperienceOutput.innerHTML=rangeWorkExperience.value;
})

// Register button validation

document.getElementById("register-button").addEventListener('click', validate, false);