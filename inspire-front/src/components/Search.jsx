import React, { useState } from 'react'

const addNewValue = newValue => fetch('/search/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newValue)
});

const search = value => fetch('/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key: 'title', value })
}).then(res => res.json());

const Search = () => {
  const [newValue, setNewValue] = useState({});
  const [addMessage, setAddMessage] = useState('');
  const [search, setSearch] = useState({ items: [] });

  const addNew = async (e) => {
    e.preventDefault();
    await addNewValue(newValue);
    setNewValue({});
    setAddMessage('Success!');
  };

  const performSearch = async (e) => {
    e.preventDefault();
    const result = await search(search.term)
    const items = result.respond.hits.hits.map(hit => hit['_source']);
    setSearch({ ...search, items });
  };

  return (
    <>
      <div className='addNew'>
        <form onSubmit={addNew}>
          Title: <input value={newValue.title}
                        onChange={(e) => setNewValue({ ...newValue, title: e.target.value })} />
          Description: <input value={newValue.description}
                              onChange={(e) => setNewValue({ ...newValue, description: e.target.value })} />
          <button type='submit'>Add!</button>
          {addMessage && <div>{addMessage}</div>}
        </form>
      </div>
      <div className='search'>
        <form onSubmit={performSearch}>
          Search: <input value={search.term}
                         onChange={e => setSearch({ ...search, term: e.target.value })} />
          <button type='submit'>Search!</button>
        </form>
        {search.items.map(item => <div>{item.title} - {item.description}</div>)}
      </div>
      {/*language=CSS*/}
      <style jsx>{`
      `}</style>
    </>
  );
}

export default Search