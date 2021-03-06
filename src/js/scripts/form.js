const connectPopupForm = document.getElementById('connect-popup-form');
const questionsForm = document.getElementById('questions-form');
const deliveryForm = document.getElementById('delivery-form');
const buildPopupForm = document.getElementById('build-popup-form');

connectPopupForm.addEventListener('submit', (e) => formSend(e, connectPopupForm));
buildPopupForm.addEventListener('submit', (e) => formSend(e, buildPopupForm));
deliveryForm.addEventListener('submit', (e) => formSend(e, deliveryForm));
questionsForm.addEventListener('submit', (e) => formSend(e, questionsForm));
let isCooperation = false

async function formSend(e, form) {
	e.preventDefault();

	let formData = new FormData(form);
	// let error = formValidate(form);
	let error = null

	if (form.id === "build-popup-form") {
		for (const key in buildingData) {
			if (Object.hasOwnProperty.call(buildingData, key)) {
				const element = buildingData[key];
				formData.append(key, element)
			}
		}
	}
	if (isCooperation) {
		formData.append("cooperation", true)
	}

	if (!error) {
		form.classList.add('_sending');
		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});
		if (response.ok) {
			let result = await response.json();
			showSuccessModal()
			form.reset();
			form.classList.remove('_sending');
		} else {
			showFailModal()
			form.classList.remove('_sending');
		}
	} else {
		// ...
	}
}

const showSuccessModal = () => {
	// показ и автозакрытие попапа с сообщением об успехе
	if ($("div.success").hasClass("_visible")) {
		// ...
	} else {
		$("div.success").addClass("_visible")
		$("div.success").removeClass("_hidden")
		setTimeout(() => {
			$("div.success").removeClass("_visible")
			$("div.success").addClass("_hidden")
		}, 2500)
	}
}

const showFailModal = () => {
	// показ и автозакрытие попапа с сообщением об ошибке
	if ($("div.fail").hasClass("_visible")) {
		// ...
	} else {
		$("div.fail").addClass("_visible")
		$("div.fail").removeClass("_hidden")
		setTimeout(() => {
			$("div.fail").removeClass("_visible")
			$("div.fail").addClass("_hidden")
		}, 2500)
	}
}

function formValidate(form) {
	// валидация формы
	let error = 0; // количество ошибок
	let formReq = document.querySelectorAll('._req'); // обязательные поля ввода

	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];

		if (!isChild(form, input)) continue; // если это поле не из этой формы, то пропускаем

		formRemoveError(input); // очищаем прошлые ошибки, на всякий случай

		if (input.getAttribute("type") === "checkbox" && input.checked === false) {
			// если это чекбокс и он пустой
			formAddError(input);
			error++;
			input.addEventListener("change", () => {
				// убираем ошибку, если пользователь ставит галочку
				formRemoveError(input)
			})
			break; // выходим, т.к. хотим показывать ошибки по очереди, а не все сразу
		} else {
			// если это просто input
			if (input.value === '') {
				formAddError(input);
				error++;
				input.addEventListener("keyup", () => {
					// убираем ошибку, если пользователь начинает что-то вводить
					formRemoveError(input)
				})
				break;
			}
		}
	}
	return error;
}

function formAddError(input) {
	input.parentElement.classList.add('_error');
}

function formRemoveError(input) {
	input.parentElement.classList.remove('_error');
}

function isChild(parent, child) {
	// проверяет на наличие дочернего элемента child у parent
	if (parent.contains(child)) return true;
	return false;
}