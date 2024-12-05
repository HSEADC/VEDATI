export async function handleForm() {
  const form = document.getElementById('my-form')
  if (!form) return

  async function handleSubmit(event) {
    event.preventDefault()
    const status = document.getElementById('my-form-status')
    const data = new FormData(event.target)

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = 'сие послание отпущено!'
          form.reset()
        } else {
          response.json().then((data) => {
            status.innerHTML = data.errors
              ? data.errors.map((e) => e.message).join(', ')
              : 'Ой, попробуйте заполнить форму еще раз'
          })
        }
      })
      .catch(() => {
        status.innerHTML = 'Ой, попробуйте заполнить форму еще раз'
      })
  }

  form.addEventListener('submit', handleSubmit)
}
