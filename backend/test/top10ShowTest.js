const axios = require("axios");
const assert = require("assert");

async function getTop10ShowsTest() {
  describe("Testing the /top10tvshows route", async () => {
    it("Get top 10 shows from the /top10tvshows route", async () => {
      try {
        const response = await axios.get('http://localhost:4000/top10tvshows');
        assert.equal(response.status, 200);
        assert.equal(response.data.length, 10);
      } catch (err) {
        assert.fail(err);
      }
    });

    it("Check if all fields are available: ", async () => {
        try {
          const response = await axios.get('http://localhost:4000/top10tvshows');
          assert.equal(response.status, 200);
          assert.equal(response.data.length, 10);
          response.data.forEach(TV => {
            assert('rank' in TV);
            assert('TV' in TV);
            assert('weeksTop10' in TV);
            assert('hoursViewed' in TV);
          });
        } catch (err) {
          assert.fail(err);
        }
      });

  });
} 

module.exports = {
    getTop10ShowsTest,
};
