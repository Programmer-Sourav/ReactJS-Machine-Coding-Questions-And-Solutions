import React, { useState } from 'react';
import explorer  from "./folderData";

const FileExplorerGPT = () => {
  const [data, setData] = useState(explorer);

  const handleToggle = (node) => {
    node.isOpen = !node.isOpen;
    setData({ ...data });
  };

  const handleAddItem = (node, isFolder, name) => {
    if (!name.trim()) return;

    const newItem = {
      id: Date.now().toString(),
      name,
      isFolder,
      items: isFolder ? [] : [],
    };

    node.items.push(newItem);
    node.isOpen = true;
    setData({ ...data });
  };

  return <Folder node={data} onToggle={handleToggle} onAddItem={handleAddItem} />;
};

const Folder = ({ node, onToggle, onAddItem }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFolder, setIsFolder] = useState(true);

  return (
    <div style={{ marginLeft: 20 }}>
      {node.isFolder ? (
        <div>
          <span onClick={() => onToggle(node)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            {node.isOpen ? '📂' : '📁'} {node.name}
          </span>
          <button onClick={() => setShowInput(!showInput)}>➕</button>
        </div>
      ) : (
        <span>📄 {node.name}</span>
      )}

      {showInput && (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter name"
          />
          <button onClick={() => { onAddItem(node, isFolder, inputValue); setInputValue(''); }}>Add</button>
          <button onClick={() => setShowInput(false)}>Cancel</button>
          <label>
            <input type="checkbox" checked={isFolder} onChange={() => setIsFolder(!isFolder)} />
            Folder
          </label>
        </div>
      )}

      {node.isOpen &&
        node.items.map((item) => (
          <Folder key={item.id} node={item} onToggle={onToggle} onAddItem={onAddItem} />
        ))}
    </div>
  );
};

export default FileExplorerGPT;
