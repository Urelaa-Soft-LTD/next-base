import { notification } from "antd";

export default function toastMessage(type, title, messageInfo) {
	return notification[type]({
		message: <div className="font-figtree text-base">{title}</div>,
		description: <div className="font-figtree text-sm">{messageInfo}</div>,
		placement: "top",
	});
}
