num_gpa = 4.1;
letter_gpa = null;

function getGPALetter(grade_code)
{
    switch(true)
    {
        case (grade_code == 4.3):
            return "A+";
        case (grade_code > 4):
            return "A";
        case (grade_code > 3.7):
            return "A-";
    }
}

code = "U";

function determineStudentType(code)
{
    let returnVal = null;

    switch(code)
    {
        case "U":
            returnVal = "UnderGrad";
            break;
        case "G":
            returnVal = "Grad";
            break;
        default:
            returnVal = "Unknown";
    }

    return returnVal;
}

console.log(determineStudentType("U"));


