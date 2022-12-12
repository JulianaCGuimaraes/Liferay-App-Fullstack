import React from 'react';

function formDoacao() {
    return (
      <form>
        <label>Organização:
          <input type="text" />
        </label>
        <label>Email:
          <input type="text" />
        </label>
        <label>Telefone:
          <input type="text" />
        </label>
      </form>
    )
  }

  export default formDoacao;