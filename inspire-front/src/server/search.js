'use strict'
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://search_elastic:9200' });

/**
 * body: { character: string, quote: string }
 */
async function addIndex(body) {
  await client.index({
    index: 'game-of-thrones',
    refresh: true,
    body
  });
}

/**
 * match: { query: { quote: string } }
 */
async function searchMatch(key, value) {
  const response = await client.search({
    index: 'game-of-thrones',
    body: {
      query: {
        fuzzy: {
          [key]: { value, "fuzziness": "AUTO" }
        }
      }
    }
  });
  return response.body;
}

module.exports.addIndex = addIndex;
module.exports.searchMatch = searchMatch;
/*
async function run () {
  // Let's start by indexing some data
  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Ned Stark',
      quote: 'Winter is coming.'
    }
  })
  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Daenerys Targaryen',
      quote: 'I am the mother of dragons.'
    }
  })
  await client.index({
    index: 'game-of-thrones',
    // here we are forcing an index refresh,
    // otherwise we will not get any result
    // in the consequent search
    refresh: true,
    body: {
      character: 'Tyrion Lannister',
      quote: 'A mind needs books like a sword needs a whetstone.'
    }
  })
  // Let's search!
  const { body } = await client.search({
    index: 'game-of-thrones',
    body: {
      query: {
        match: {
          quote: 'winter'
        }
      }
    }
  })
  console.log(body.hits.hits)
}
run().catch(console.log)
*/

