describe('schema for publisher author genre', function() {
  it('Publisher Author schema should be Option 6', function() {
    sqlPublisherAuthorSchema.should.equal(Schemas.OPTION_6);
  });

  it('Publisher Genre schema should be Option 4', function() {
    sqlPublisherGenreSchema.should.equal(Schemas.OPTION_4);
  });

  it('Author Genre schema should be Option 6', function() {
    sqlAuthorGenreSchema.should.equal(Schemas.OPTION_6);
  });
});
