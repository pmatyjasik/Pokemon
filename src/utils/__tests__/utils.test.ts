import { getCurrentDate } from "@/utils/utils";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                dateTime: "2024-08-22T10:15:30",
                dayOfWeek: "Thursday",
                timeZone: "Europe/Warsaw",
            }),
    })
) as jest.Mock;

describe("getCurrentDate", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return the correct formatted date and day of the week", async () => {
        const mockResponse = {
            dateTime: "2024-08-22T10:15:30",
            dayOfWeek: "Thursday",
            timeZone: "Europe/Warsaw",
        };

        (fetch as jest.Mock).mockResolvedValueOnce({
            json: () => Promise.resolve(mockResponse),
        });

        const result = await getCurrentDate();

        expect(result).toBe("Thursday, 22.08.2024");
        expect(fetch).toHaveBeenCalledWith("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Warsaw", {
            next: { revalidate: 60 },
        });
    });

    it("should handle fetch failures gracefully", async () => {
        (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

        await expect(getCurrentDate()).rejects.toThrow("Network error");
    });
});
