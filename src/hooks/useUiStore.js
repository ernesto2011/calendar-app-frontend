import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { onCloseModal, onOpenModal } from "../store";

export const useUiStore = () =>{
    const dispatch = useDispatch();
    const {isModalOpen} = useSelector(state => state.ui);

    const openDateModal = () =>{
        dispatch(onOpenModal());
    }
    const closeDateModal = () =>{
        dispatch(onCloseModal());
    }
    return { 
        isModalOpen,
        openDateModal,
        closeDateModal,
    };
}