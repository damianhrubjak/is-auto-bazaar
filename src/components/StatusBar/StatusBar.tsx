type Props = {
    isFetching: boolean;
    onRefetchClick: () => void;
};

function StatusBar({ isFetching, onRefetchClick }: Props) {
    return (
        <div className="mb-8 flex w-full items-center justify-between rounded-lg bg-slate-600 px-4 py-3">
            <p>{isFetching ? "Načítavam..." : "Údaje sú načítané"}</p>
            <button
                onClick={() => onRefetchClick()}
                className="rounded-md bg-slate-800 px-6 py-2 transition duration-300 hover:bg-slate-900"
            >
                Obnoviť
            </button>
        </div>
    );
}
export default StatusBar;
