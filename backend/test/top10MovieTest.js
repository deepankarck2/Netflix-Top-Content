const axios = require("axios");
const assert = require("assert");

async function getTop10MoviesTest() {
  describe("Testing the /top10movies route", async () => {
    it("Get top 10 movies from the /top10movies route", async () => {
      try {
        const response = await axios.get('http://localhost:4000/top10movies');
        assert.equal(response.status, 200);
        assert.equal(response.data.length, 10);
      } catch (err) {
        assert.fail(err);
      }
    });

    it("Check if all fields are available: ", async () => {
        try {
          const response = await axios.get('http://localhost:4000/top10movies');
          assert.equal(response.status, 200);
          assert.equal(response.data.length, 10);
          response.data.forEach(movie => {
            assert('rank' in movie);
            assert('Movie' in movie);
            assert('weeksTop10' in movie);
            assert('hoursViewed' in movie);
          });
        } catch (err) {
          assert.fail(err);
        }
      });

  });
} 

module.exports = {
  getTop10MoviesTest,
};
