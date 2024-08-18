import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { onOpenModal } from "../store";

export const useUiStore = () =>{
    const dispatch = useDispatch();
    const {isModalOpen} = useSelector(state => state.ui);

    const openModal = () =>{
        dispatch(onOpenModal());
    }
    return { 
        isModalOpen,
        openModal
    };
}