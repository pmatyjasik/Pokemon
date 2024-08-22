import { renderHook, act } from "@testing-library/react-hooks";
import { useModal } from "@/hooks/useModal/useModal";

describe("useModalState", () => {
    it("should initialize with modal closed", () => {
        const { result } = renderHook(() => useModal());
        expect(result.current.isModalOpen).toBe(false);
    });

    it("should open modal when openModal is called", () => {
        const { result } = renderHook(() => useModal());
        act(() => {
            result.current.openModal();
        });
        expect(result.current.isModalOpen).toBe(true);
    });

    it("should close modal when closeModal is called", () => {
        const { result } = renderHook(() => useModal());
        act(() => {
            result.current.openModal();
        });
        expect(result.current.isModalOpen).toBe(true);

        act(() => {
            result.current.closeModal();
        });
        expect(result.current.isModalOpen).toBe(false);
    });

    it("should call the callback function when closeModal is called with a callback", () => {
        const mockCallback = jest.fn();
        const { result } = renderHook(() => useModal());

        act(() => {
            result.current.openModal();
        });

        act(() => {
            result.current.closeModal(mockCallback);
        });

        expect(result.current.isModalOpen).toBe(false);
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    it("should not call the callback function when closeModal is called without a callback", () => {
        const mockCallback = jest.fn();
        const { result } = renderHook(() => useModal());

        act(() => {
            result.current.openModal();
        });

        act(() => {
            result.current.closeModal();
        });

        expect(result.current.isModalOpen).toBe(false);
        expect(mockCallback).not.toHaveBeenCalled();
    });
});
