import { useCallback, useEffect, useState } from "react";

export const useLoginInput = () => {
    const [회원번호, set회원번호] = useState<string>('');
    const [비밀번호, set비밀번호] = useState<string>('');
    const [isInputValid, setIsInputValid] = useState<boolean>(false);

    const handle회원번호 = useCallback((text: string) => {
        set회원번호(text);
    }, [회원번호]);

    const handle비밀번호 = useCallback((text: string) => {
        set비밀번호(text);
    }, [비밀번호]);

    const handleInputValid = useCallback(() => {
        if (회원번호.trim() && 비밀번호.trim()) {
            setIsInputValid(true);
        } else {
            setIsInputValid(false);
        }
    }, [회원번호, 비밀번호]);

    useEffect(() => {
        handleInputValid();
    }, [회원번호, 비밀번호]);

    return { 회원번호, 비밀번호, handle회원번호, handle비밀번호, isInputValid };
}