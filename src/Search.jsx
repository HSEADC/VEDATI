import React, { useState, useEffect } from 'react'
import json from './library.json' // импорт JSON с объектом { cards: [...] }

const data = json.cards // извлекаем массив карточек

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error('library.cards не является массивом!')
      return
    }

    if (query.trim() === '') {
      setResults([])
    } else {
      const filtered = data.filter((item) =>
        item.text?.title?.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    }
  }, [query])

  return (
    <div
      style={{
        position: 'relative',
        width: '300px',
        margin: '2rem auto',
        padding: '7vw 0 0 0',
      }}
    >
      <input
        type="text"
        placeholder="Поиск слов..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          color: '#000',
          fontSize: '16px',
        }}
      />

      {results.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '40px',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderTop: 'none',
            listStyle: 'none',
            margin: 0,
            padding: '8px',
            zIndex: 1000,
          }}
        >
          {results.map((item, index) => (
            <li
              key={index}
              style={{ padding: '4px 0', cursor: 'pointer' }}
              onClick={() =>
                (window.location.href = item.onclick
                  .replace('window.location.href=', '')
                  .replace(/'/g, ''))
              }
            >
              <span dangerouslySetInnerHTML={{ __html: item.text.title }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
