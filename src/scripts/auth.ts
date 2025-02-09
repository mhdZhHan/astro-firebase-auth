import { actions, isInputError } from "astro:actions"

const authForm = document.querySelector("#authForm") as HTMLFormElement

authForm?.addEventListener("submit", async (event) => {
	event.preventDefault()
	const formData = new FormData(authForm)
	const formType = formData.get("formType") as string

	if (formType === "signup") {
		// passing the form data to createAccount action
		const { error, data } = await actions.createAccount.safe(formData)

		if (error) {
			// handle error (future)
			console.log(error)
			if (isInputError(error)) {
				console.log(error.fields)
			}
			return
		}

		window.location.href = "/"
	} else if (formType === "login") {
		// login
		const { error, data } = await actions.loginAccount.safe(formData)
		if (error) {
			// handle error (future)
			console.log(error)
			if (isInputError(error)) {
				console.log(error.fields)
			}
			return
		}

		window.location.href = "/"
	}
})

export const AccountLogout = (logoutBtn: HTMLElement) => {
	logoutBtn?.addEventListener("click", async (event) => {
		const { error } = await actions.logoutAccount.safe()

		if (error) {
			// handle error (future)
			console.log(error)
			if (isInputError(error)) {
				console.log(error.fields)
			}
			return
		}

		window.location.href = "/"
	})
}
