var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.OPTION_3; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// i chose option_3 because it was setup so that each publisher could have multiple authors since there id was attached to
// the publishers id


var sqlPublisherGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// i chose options_6 because it had a seperate genre and publisher that were both attached, so this enabled an author to have
// multiple publishers and genres.
var sqlAuthorGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// i went with option_4 because it alowed multiple genres with its name catagory, and each genre had and id
// that could be stored on the author saying what genre they were writing in
